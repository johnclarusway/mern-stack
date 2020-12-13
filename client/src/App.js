import "./App.css";
import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";
import { Layout, Button } from "antd";

function App() {
  return (
    <Layout className="layout">
      <AppRouter />
    </Layout>
  );
}

export default App;
