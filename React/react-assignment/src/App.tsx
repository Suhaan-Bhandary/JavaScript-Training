import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
