import "./App.css";
import Layout from "./componets/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <h1>
        <Layout />
        <ToastContainer />
      </h1>
    </div>
  );
}

export default App;
