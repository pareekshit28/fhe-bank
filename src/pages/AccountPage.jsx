import React from "react";

const AccountPage = () => {
  return (
    <div className=" bg-black h-full text-white p-24">
      <p className="text-4xl font-extrabold  mb-4 text-[#46E281]">Details</p>
      <div className="flex justify-center items-center mb-4">
        <table className="min-w-full bg-transparent border border-gray-300 shadow-md">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-r w-1/3">Address</td>
              <td className="py-2 px-4 border-b">
                {window.ethereum.selectedAddress}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r w-1/3">
                Beneficiary Name
              </td>
              <td className="py-2 px-4 border-b">Jisha Cheriyan</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r w-1/3">Balance</td>
              <td className="py-2 px-4 border-b">99.99999 tFHE</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r w-1/3">Nominee</td>
              <td className="py-2 px-4 border-b">
                0xkuQWYGODHBEWFUYGRDOI3QURBOYEBFHDFIUY
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-4xl font-extrabold text-[#46E281] mb-4">
        All Transactions
      </p>
      <table className="min-w-full bg-transparent border border-gray-300 shadow-md mb-4">
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-r w-1/5 font-bold">
              Date
            </td>
            <td className="py-2 px-4 border-b border-r w-1/3 font-bold">
              Address
            </td>
            <td className="py-2 px-4 border-b border-r w-1/4 font-bold">
              Amount
            </td>
            <td className="py-2 px-4 border-b border-r font-bold">Type</td>
          </tr>
        </tbody>
      </table>
      <table className="min-w-full bg-transparent border border-gray-300 shadow-md">
        <tbody>
          {[1, 2, 3, 4].map((ele) => {
            return (
              <tr>
                <td className="py-2 px-4 border-b border-r w-1/5">
                  {Date.now()}
                </td>
                <td className="py-2 px-4 border-b border-r w-1/3">
                  {window.ethereum.selectedAddress}
                </td>
                <td className="py-2 px-4 border-b border-r w-1/4">
                  12.02 tFHE
                </td>
                <td className="py-2 px-4 border-b border-r text-red-500">
                  Debit
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
