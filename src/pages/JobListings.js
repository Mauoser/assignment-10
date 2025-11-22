import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    requiredSkills: ["React", "Node.js", "JavaScript", "MongoDB", "AWS"],
    salary: "$120,000 - $160,000/year",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    requiredSkills: [
      "SEO",
      "SEM",
      "Social Media",
      "Google Analytics",
      "Content Marketing",
    ],
    salary: "$70,000 - $95,000/year",
    lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
    requiredSkills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    salary: "$85,000 - $120,000/year",
    lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
    requiredSkills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "TensorFlow",
    ],
    salary: "$110,000 - $150,000/year",
    lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
    requiredSkills: [
      "Communication",
      "Problem Solving",
      "Customer Service",
      "CRM Software",
      "Patience",
    ],
    salary: "$40,000 - $55,000/year",
    lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
    requiredSkills: [
      "Project Management",
      "Agile",
      "Leadership",
      "Budget Management",
      "Stakeholder Communication",
    ],
    salary: "$95,000 - $135,000/year",
    lastUpdated: "Last updated 1 week ago",
    applyLink: "https://example.com/apply/project-manager",
  },
];

const JobListings = () => {
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
          Job Listings
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Find your next opportunity from our curated list of positions
        </Typography>
      </Box>

      <Container sx={{ py: 6 }}>
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
          {jobPosts.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card
                className="job-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, color: "#667eea" }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "#666", lineHeight: 1.6 }}
                  >
                    {job.description}
                  </Typography>

                  <Box sx={{ mb: 2, pt: 2, borderTop: "1px solid #e0e0e0" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
                    >
                      💰 {job.salary}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "bold", mb: 1.5, color: "#333" }}
                    >
                      Required Skills:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {job.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </Box>
                  </Box>

                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: "#999", mt: 2 }}
                  >
                    ⏱ {job.lastUpdated}
                  </Typography>
                </CardContent>
                <CardActions sx={{ pt: 0 }}>
                  <Button
                    href={job.applyLink}
                    target="_blank"
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      ml: "auto",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                      },
                    }}
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobListings;
