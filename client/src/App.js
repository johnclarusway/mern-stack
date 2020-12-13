import "./App.css";
import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";
import { Layout } from "antd";

function App() {
  return (
    <AuthContextProvider>
      <Layout className="layout">
        <AppRouter />
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
