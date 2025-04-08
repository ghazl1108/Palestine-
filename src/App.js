import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ Toast container
import "react-toastify/dist/ReactToastify.css"; // ✅ Toast styles

import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

// 🔁 Component to manage navbar visibility and routing
const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only when not on login page */}
      {location.pathname !== "/" && <Navbar />}

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/upload"
          element={isLoggedIn ? <UploadPage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
