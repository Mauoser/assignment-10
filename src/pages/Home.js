import React from "react";
import { Container, Typography, Box, Button, Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Job Listings
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Find your next opportunity from our curated list of positions
        </Typography>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 6, fontWeight: 700, color: "#333" }}
        >
          Why Choose Our Job Portal?
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 3,
                transition: "all 0.3s ease",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.2)",
                },
              }}
            >
              <Box sx={{ color: "#667eea", mb: 2 }}>
                <SearchIcon sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Easy Search
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Find jobs that match your skills and experience with advanced
                filtering options.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 3,
                transition: "all 0.3s ease",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.2)",
                },
              }}
            >
              <Box sx={{ color: "#667eea", mb: 2 }}>
                <BusinessIcon sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Top Companies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access job listings from leading companies across various
                industries.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 3,
                transition: "all 0.3s ease",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.2)",
                },
              }}
            >
              <Box sx={{ color: "#667eea", mb: 2 }}>
                <AssignmentIcon sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Quick Apply
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Apply to multiple positions instantly and track your
                applications.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Start Your Job Search?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Access thousands of job listings from top companies
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#667eea",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
              component={Link}
              to="/jobs"
            >
              Browse Jobs
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: 600,
                px: 4,
                py: 1.2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
              component={Link}
              to="/companies"
            >
              All Companies
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
