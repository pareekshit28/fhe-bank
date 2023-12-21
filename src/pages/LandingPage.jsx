import React from "react";
import ConnectWallet from "../components/ConnectWallet";
//import UploadFile from "../components/UploadFile";
//import hand from "../images/0_green_glass_hands__glass__glass_morphism__3d_model_esrgan-v1-x2plus-removebg-preview.png";
import Lock from "../images/Lock.png";

const LandingPage = ({ isConnected, setIsConnected }) => {
  return (
    <div className="flex h-full">
      <div className=" bg-black h-full w-2/3 flex items-center">
        <div className=" ml-28">
          <p className=" text-white font-bold text-5xl mb-6">
            True <span className=" text-[#46E281]">End-to-end</span>
            <br />
            Encrypted Transactions
          </p>
          <p className="text-white mb-4">
            Powered by strong Fully Homomorphic Encryption (FHE),
            <br />
            All your transactions stay on-chain and fully encrypted. Forever.
          </p>
          <ConnectWallet
            isConnected={isConnected}
            setIsConnected={setIsConnected}
          />
        </div>
      </div>
      <div className="h-full w-1/3 bg-gradient-to-tl from-emerald-700 via-black to-emerald-700 flex items-center">
        <img src={Lock} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
