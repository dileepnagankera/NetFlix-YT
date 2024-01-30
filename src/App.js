import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Body />
      </AuthContextProvider>
    </>
  );
}

export default App;

