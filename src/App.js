import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepositPage from "./pages/DepositPage";
import LoanPage from "./pages/LoanPage";
import AccountPage from "./pages/AccountPage";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if MetaMask is already connected
    const checkConnection = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setIsConnected(true);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className=" h-screen w-screen">
      <BrowserRouter>
        <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/account"
            element={
              <AccountPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/deposit"
            element={
              <DepositPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/loans"
            element={
              <LoanPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
