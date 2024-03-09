import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </>
  );
}

export default App;
