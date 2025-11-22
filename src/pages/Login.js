import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Card,
  Alert,
} from "@mui/material";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
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
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Welcome Back
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Box sx={{ mt: 6, mb: 4 }}>
          <Card
            sx={{
              p: 4,
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(102, 126, 234, 0.15)",
            }}
          >
            {/* Login Icon */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  color: "white",
                }}
              >
                <LoginIcon sx={{ fontSize: 32 }} />
              </Box>
            </Box>

            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: 700, mb: 3 }}
            >
              Sign In
            </Typography>

            {err && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {err}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                sx={{ mb: 3 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                  },
                }}
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
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ textAlign: "center", mt: 3, color: "#666" }}
            >
              Don't have an account? Please contact the administrator.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
