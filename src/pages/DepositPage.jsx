import React from "react";

const DepositPage = () => {
  return (
    <div className=" h-full flex justify-center items-center bg-black">
      {/* <p className="text-white fixed mb-80">
        Txn:{" "}
        <a href="/" className="text-blue-500 underline">
          0x9609809870798609870986079y98709087
        </a>
      </p> */}
      <div className=" bg-gradient-to-br from-emerald-700 via-black to-emerald-700 bg-opacity-30 backdrop-filter backdrop-blur-xl border-2 border-emerald-900 rounded-lg p-8 shadow-2xl flex-col justify-center items-center">
        <p className="text-4xl font-extrabold text-white mb-4">Deposit</p>
        <div className="flex items-center bg-black/40 rounded-md h-12 w-72 text-white mb-4">
          <input
            type="text"
            className=" border-none focus:outline-none bg-transparent w-full px-4 rounded-l-md "
            placeholder="Enter Amount"
          />
          <span className="bg-transparent px-4">tFHE</span>
        </div>
        <button
          className=" bg-[#42E67D] h-12 w-72 font-bold rounded flex justify-center items-center"
          //onClick={connectToMetaMask}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DepositPage;
