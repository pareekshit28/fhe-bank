// Navbar.jsx

import React from "react";
import ConnectWallet from "./ConnectWallet";
import Fhe from "../images/Fhenixlogobg.png";
import { Link } from "react-router-dom";

const Navbar = ({ isConnected, setIsConnected }) => {
  return (
    <nav className=" shadow-xl bg-opacity-30 backdrop-blur-xl fixed w-full top-0 px-6 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <div className="text-white font-bold text-xl ml-4 mr-16 flex items-center">
              <img className=" h-16 w-16" src={Fhe} alt="" />
              FHE Bank
            </div>
          </Link>
          <div className="flex space-x-10">
            <Link to="/account">
              <p className="text-white font-bold hover:text-gray-300">
                Account
              </p>
            </Link>
            <Link to="/deposit">
              <p className="text-white font-bold hover:text-gray-300">
                Deposit
              </p>
            </Link>
            <Link to="/loans">
              <p className="text-white font-bold hover:text-gray-300">Loans</p>
            </Link>
            <Link to="/contract">
              <p className="text-white font-bold hover:text-gray-300">
                Smart Contract
              </p>
            </Link>
          </div>
        </div>
        <ConnectWallet
          type={"nav"}
          isConnected={isConnected}
          setIsConnected={setIsConnected}
        />
      </div>
    </nav>
  );
};

export default Navbar;
