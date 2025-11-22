import React from "react";
import { Container, Typography, Box, Grid, Card } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupIcon from "@mui/icons-material/Group";

export default function About() {
  const features = [
    {
      icon: <InfoIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Our Mission",
      description:
        "To connect talented professionals with their dream jobs and help companies find exceptional talent.",
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Innovation",
      description:
        "We continuously improve our platform to provide the best job searching and hiring experience.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: "#667eea" }} />,
      title: "Community",
      description:
        "We foster a community where professionals and employers can connect and grow together.",
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
          About Us
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Building the future of job searching
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Main Content */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 3, color: "#333" }}
          >
            Welcome to Our Job Portal
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, color: "#666", mb: 2 }}
          >
            This is a comprehensive job portal platform designed to
            revolutionize the way professionals discover opportunities and
            employers find talent. Built with modern web technologies, our
            platform provides a seamless experience for both job seekers and
            hiring managers.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#666" }}>
            Whether you're looking for your next career opportunity or searching
            for exceptional talent to join your team, our platform offers
            intuitive tools and comprehensive job listings to help you succeed.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 35px rgba(102, 126, 234, 0.2)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: "#333" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
