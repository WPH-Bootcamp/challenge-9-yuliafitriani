import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { AuthBootstrap } from "./app/provider/auth-bootstrap";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RestoDetailPage from "./pages/RestoDetailPage";

function App() {
  return (
    <>
      <AuthBootstrap />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/resto/:id" element={<RestoDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
