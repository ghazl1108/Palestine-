import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  InputLabel,
  Input,
  Stack,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion"; // 👈 Add animation

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploading: ${selectedFile.name}`);
    } else {
      alert("Please choose a file first.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Box sx={{ padding: "2rem", paddingTop: "6rem" }}>
        <Typography variant="h4" gutterBottom>
          Upload IPO Data
        </Typography>

        <Typography variant="body1" gutterBottom>
          Upload your financial files to get detailed IPO predictions and readiness analysis.
        </Typography>

        <Paper
          elevation={3}
          sx={{
            marginTop: "2rem",
            padding: "2rem",
            textAlign: "center",
            maxWidth: 500,
          }}
        >
          <Stack spacing={2} alignItems="center">
            <InputLabel htmlFor="upload-input">Choose a file</InputLabel>
            <Input
              id="upload-input"
              type="file"
              accept=".pdf, .docx, .xlsx, .csv"
              onChange={handleFileChange}
              disableUnderline
            />
            {selectedFile && (
              <Typography variant="body2">
                Selected file: <strong>{selectedFile.name}</strong>
              </Typography>
            )}
            <Button
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Stack>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default UploadPage;

