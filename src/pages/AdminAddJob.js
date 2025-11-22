import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../redux/jobsSlice";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AdminAddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.jobs);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    description: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    // Validate salary
    const salary = parseFloat(formData.salary);
    if (isNaN(salary) || salary <= 0) {
      return;
    }

    const result = await dispatch(
      createJob({
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        description: formData.description,
        salary,
      })
    );

    if (result.type === "jobs/createJob/fulfilled") {
      setSuccess(true);
      setFormData({
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
      });
      setTimeout(() => {
        navigate("/admin/employees");
      }, 2000);
    }
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 1,
          }}
        >
          <AddCircleIcon sx={{ fontSize: 32 }} />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Post a New Job
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.95 }}>
          Fill in the details below to create a new job listing
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Card
            sx={{
              p: 4,
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(102, 126, 234, 0.15)",
            }}
          >
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Job created successfully! Redirecting...
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Company Name"
                fullWidth
                required
                sx={{ mb: 2 }}
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={loading}
                placeholder="e.g., Tech Corp"
              />

              <TextField
                label="Job Title"
                fullWidth
                required
                sx={{ mb: 2 }}
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                disabled={loading}
                placeholder="e.g., Senior Developer"
              />

              <TextField
                label="Description"
                fullWidth
                required
                multiline
                rows={4}
                sx={{ mb: 2 }}
                name="description"
                value={formData.description}
                onChange={handleChange}
                disabled={loading}
                placeholder="Describe the job role, responsibilities, and requirements..."
              />

              <TextField
                label="Salary"
                fullWidth
                required
                sx={{ mb: 3 }}
                name="salary"
                type="number"
                inputProps={{ step: "0.01", min: "0" }}
                value={formData.salary}
                onChange={handleChange}
                disabled={loading}
                placeholder="e.g., 50000"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)",
                  },
                  "&:disabled": {
                    opacity: 0.7,
                  },
                }}
              >
                {loading ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    Creating...
                  </Box>
                ) : (
                  "Post Job"
                )}
              </Button>
            </form>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminAddJob;
