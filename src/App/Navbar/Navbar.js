// src/App/Navbar/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import WorkIcon from "@mui/icons-material/Work";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "/jobs" },
    { label: "Companies", path: "/companies" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <WorkIcon sx={{ mr: 1.5, fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "-0.5px",
              }}
            >
              JobPortal
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 0.5, mr: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  px: 2,
                  py: 1,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: 2,
                    background: "white",
                    transform: "translateX(-50%)",
                    transition: "width 0.3s ease",
                    borderRadius: 1,
                  },
                  "&:hover::after": {
                    width: "80%",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* User Section */}
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  opacity: 0.95,
                }}
              >
                {user.email}
              </Typography>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.2)",
                  px: 2.5,
                  py: 0.8,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.3)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                fontWeight: 600,
                background: "rgba(255,255,255,0.25)",
                px: 3,
                py: 1,
                borderRadius: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.35)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
