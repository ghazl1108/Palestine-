import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify"; // ✅ Toast import

const Navbar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Perform logout logic
    toast.info("Logged out successfully!"); // ✅ Show logout toast
  };

  return (
    <AppBar position="fixed" style={{ background: "#1a202c" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          IPO Advisory
        </Typography>
        <Link to="/dashboard" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Dashboard</Link>
        <Link to="/upload" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Upload</Link>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
