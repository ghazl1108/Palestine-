import React from "react";
import { Box, Typography } from "@mui/material";
import SampleChart from "../components/SampleChart";
import { motion } from "framer-motion"; // 👈 Add this for animation

const Dashboard = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Box sx={{ padding: "2rem", paddingTop: "6rem" }}>
        <Typography variant="h4" gutterBottom>
          Dashboard Overview
        </Typography>

        <Box sx={{ marginTop: "2rem" }}>
          <SampleChart />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Dashboard;

