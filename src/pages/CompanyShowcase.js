import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/user/companyImage");
        const comps = res.data.companies.map((c) => ({
          name: c.companyName,
          imagePath: `http://localhost:3000${c.imagePath}`,
        }));
        setCompanies(comps);
      } catch (err) {
        console.error("Error fetching companies:", err);
        setError("Unable to fetch companies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

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
          Our Partner Companies
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Explore careers with industry-leading organizations
        </Typography>
      </Box>

      <Container sx={{ py: 6 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="info" sx={{ mb: 3 }}>
            {error}
          </Alert>
        ) : companies.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <BusinessIcon sx={{ fontSize: 80, color: "#ccc", mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              No company images found yet
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Companies will appear here once they are uploaded to the backend.
            </Typography>
          </Box>
        ) : (
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
            {companies.map((c, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  className="company-card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={c.imagePath}
                    alt={c.name}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#333" }}
                    >
                      {c.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Explore opportunities with {c.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CompanyShowcase;
