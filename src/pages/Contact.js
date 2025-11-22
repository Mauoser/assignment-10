import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  TextField,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Email",
      info: "jobs@example.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Phone",
      info: "+1 (555) 123-4567",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Location",
      info: "123 Job Street, Tech City, TC 12345",
    },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Get in touch with our team
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 4, color: "#333" }}
            >
              Get In Touch
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
              }}
            >
              {contactInfo.map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Card
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      transition: "all 0.3s ease",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      "&:hover": {
                        transform: "translateX(8px)",
                        boxShadow: "0 10px 25px rgba(102, 126, 234, 0.15)",
                      },
                    }}
                  >
                    <Box>{item.icon}</Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#333" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.info}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
