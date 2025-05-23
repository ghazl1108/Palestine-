import React from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import "../styles/App.css";
import { motion } from "framer-motion"; 
import { toast } from "react-toastify"; 

// ✅ Replace with your new logo
import LogoImage from "../assets/ipo-logo.png";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    toast.success("Login successful! 🎉");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box className="login-container">
        {/* Left Side - Logo & Text */}
        <Box className="login-left">
          <img src={LogoImage} alt="IPO Advisory Logo" className="login-image-large" />
          <Typography variant="h4" className="welcome-heading">
            Welcome to the IPO Advisory Portal
          </Typography>
          <Typography variant="body1" className="welcome-text">
            Get data-driven predictions and insights to navigate the IPO process with confidence.
          </Typography>
        </Box>

        {/* Right Side - Login Form */}
        <Box className="login-right">
          <Paper elevation={6} className="login-card">
            <Typography variant="h5" gutterBottom className="login-title">
              Login to Your Account
            </Typography>
            <TextField label="Username" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default LoginPage;
