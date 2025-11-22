import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Pagination,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobsSlice";
import WorkIcon from "@mui/icons-material/Work";

const ITEMS_PER_PAGE = 6;

const JobListings = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedJobs = jobs.slice(startIdx, endIdx);
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  const handlePageChange = (e, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const formatSalary = (salary) => {
    return `$${salary.toLocaleString()}/year`;
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 1,
          }}
        >
          <WorkIcon sx={{ fontSize: 32 }} />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Job Listings
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Find your next opportunity from our available positions
        </Typography>
      </Box>

      <Container sx={{ py: 6 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {jobs.length === 0 ? (
              <Alert severity="info">No jobs available at the moment.</Alert>
            ) : (
              <>
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
                  {paginatedJobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job._id}>
                      <Card
                        sx={{
                          borderRadius: "12px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 12px 30px rgba(102, 126, 234, 0.2)",
                          },
                        }}
                      >
                        <CardContent>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, mb: 1, color: "#667eea" }}
                          >
                            {job.jobTitle}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mb: 1, color: "#999", fontSize: "0.9rem" }}
                          >
                            {job.companyName}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mb: 2, color: "#666", lineHeight: 1.6 }}
                          >
                            {job.description}
                          </Typography>

                          <Box
                            sx={{
                              mb: 2,
                              pt: 2,
                              borderTop: "1px solid #e0e0e0",
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: "bold", color: "#667eea" }}
                            >
                              💰 {formatSalary(job.salary)}
                            </Typography>
                          </Box>

                          <Typography
                            variant="caption"
                            display="block"
                            sx={{ color: "#999", mt: 2 }}
                          >
                            ⏱ Posted{" "}
                            {new Date(job.createdAt).toLocaleDateString()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {totalPages > 1 && (
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 4 }}
                  >
                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={handlePageChange}
                      color="primary"
                      sx={{
                        "& .MuiPaginationItem-page.Mui-selected": {
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                        },
                      }}
                    />
                  </Box>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default JobListings;
