// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "fhevm/lib/TFHE.sol";

contract FHEBank {
    address private creditScoreAuthority;
    uint32 private counter;

    struct Account {
        euint32 balance;
        euint16 creditScore;
        euint32 nominee;
    }

    struct Txn {
        address to;
        uint256 milliseconds;
        euint32 amount;
    }

    struct eTxn {
        address to;
        uint256 milliseconds;
        bytes amount;
    }
   
    mapping(address => Account) public accounts;
    mapping(address => uint32) public addressToId;
    mapping(uint32 => address) public idToAddress;
    mapping(address => Txn[]) public txns;

    constructor() {
        creditScoreAuthority = msg.sender;
        counter = 0;
    }

    function createAccount(bytes calldata nominee) external {
        require(addressToId[msg.sender] == 0, "Account already exists");
        euint32 enominee = TFHE.asEuint32(nominee);
        TFHE.optReq(TFHE.gt(counter+1, enominee)); //Nominee account should already exist
        counter = counter + 1;
        accounts[msg.sender] = Account({
            balance: TFHE.asEuint32(0),
            creditScore: TFHE.asEuint16(600),
            nominee: enominee
        });
        addressToId[msg.sender] = counter;
        idToAddress[counter] = msg.sender;
    }

    modifier accountExists() {
        require(addressToId[msg.sender] != 0);
        _;
    }

    function getAllTransactions(bytes32 publicKey) external view returns (eTxn[] memory){
        eTxn[] memory etxns = new eTxn[](txns[msg.sender].length);
        for(uint32 i=0; i<txns[msg.sender].length; i++){
            etxns[i] = eTxn({
                to: txns[msg.sender][i].to,
                milliseconds: txns[msg.sender][i].milliseconds,
                amount: TFHE.reencrypt(txns[msg.sender][i].amount, publicKey)
            });
        }
        return etxns;
    }

    function deposit(bytes calldata amount) external accountExists {
        euint32 eamount = TFHE.asEuint32(amount);
        accounts[msg.sender].balance = TFHE.add(accounts[msg.sender].balance, eamount);
    }

    function send(address to, bytes calldata amount) external accountExists {
        euint32 eamount = TFHE.asEuint32(amount);
        TFHE.optReq(TFHE.le(eamount, accounts[msg.sender].balance)); //Insufficient Funds
        accounts[msg.sender].balance = TFHE.sub(accounts[msg.sender].balance, eamount);
        accounts[to].balance = TFHE.add(accounts[to].balance, eamount);
        txns[msg.sender].push(Txn({
            to: to,
            milliseconds: block.timestamp,
            amount: eamount
        }));
    }

    function getBalance(bytes32 publicKey) external view accountExists returns (bytes memory) {
        return TFHE.reencrypt(accounts[msg.sender].balance, publicKey);
    }

    function borrowLoan(bytes calldata amount) external accountExists {
        euint32 eamount = TFHE.asEuint32(amount);
        TFHE.optReq(TFHE.gt(eamount, 0)); //Loan Amount should be greater than 0
        TFHE.optReq(TFHE.gt(accounts[msg.sender].creditScore, 700)); //Credit Score should be greater than 700

        accounts[msg.sender].balance = TFHE.add(accounts[msg.sender].balance, eamount);
    }

    function setCreditScore(address addr, bytes calldata score) external accountExists {
        euint16 escore = TFHE.asEuint16(score);
        require(msg.sender == creditScoreAuthority, "Only Credit Score Authority can set Credit Score");
        TFHE.optReq(TFHE.gt(escore, 0)); //Credit Score should be greater than 0
        accounts[addr].creditScore = escore;
    }
}