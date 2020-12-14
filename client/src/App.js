import "./App.css";
import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";
import { Layout } from "antd";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <Layout className="layout">
        <AppRouter />
        <ToastContainer />
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
