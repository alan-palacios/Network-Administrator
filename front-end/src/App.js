import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import useProviderAuth from "./hooks/useProviderAuth";
import LoginRoutes from "./navigation/LoginRoutes";

function App() {
  return (
    <AuthContext.Provider value={useProviderAuth} >
      <BrowserRouter>
        <div className="h-screen from-black to-red-dark bg-gradient-to-t w-full text-white">
          <Navbar />
          <div className="flex h-screen">
            <LoginRoutes />
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
