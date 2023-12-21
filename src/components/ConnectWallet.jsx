import React from "react";
import Account from "../images/Account.png";
import Arrow from "../images/up-right-arrow.png";
import { Link } from "react-router-dom";

const ConnectWallet = ({ isConnected, setIsConnected, type }) => {
  const connectToMetaMask = async () => {
    try {
      // Detect if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the selected account
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setIsConnected(true);
        } else {
          console.error("No accounts found");
        }
      } else {
        console.error("MetaMask not installed");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button
          className=" bg-[#42E67D] h-12 w-48 rounded font-bold"
          onClick={connectToMetaMask}
        >
          Connect to Wallet
        </button>
      ) : type === "nav" ? (
        <div className="flex items-center">
          <img src={Account} alt="" className="h-6 w-6 mr-2 " />
          <p className=" text-white font-bold">{`${window.ethereum.selectedAddress.slice(
            0,
            5
          )}....${window.ethereum.selectedAddress.slice(-5)}`}</p>
        </div>
      ) : (
        <>
          <Link to="/account">
            <button
              className=" bg-[#42E67D] h-12 w-48 font-bold rounded flex justify-center items-center"
              //onClick={connectToMetaMask}
            >
              Go to Account
              <img src={Arrow} alt="" className=" h-6 w-6 ml-1 mt-1" />
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ConnectWallet;
