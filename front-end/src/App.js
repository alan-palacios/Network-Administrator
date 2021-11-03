import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import SidebarAccount from "./components/SidebarAccount";
import AuthContext from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import useProviderAuth from "./hooks/useProviderAuth";
import LoginRoutes from "./routes/LoginRoutes";

function App() {
  return (
    <AuthContext.Provider value={useProviderAuth()} >
      <BrowserRouter>
        <div className="h-screen from-black to-red-dark bg-gradient-to-t w-full text-white flex">
          <Navs />
          <div className="flex h-screen w-full">
            <LoginRoutes />
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

function Navs() {
  const auth = useAuth();
  if (auth.user) {
    return <SidebarAccount /> 
  } else {
    return <Navbar />   
  }
}

export default App;
