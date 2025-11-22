import React, { useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";
import BadgeIcon from "@mui/icons-material/Badge";

const AdminEmployees = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
          <BadgeIcon sx={{ fontSize: 32 }} />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Employees Management
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.95 }}>
          View and manage all registered employees in the system
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
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
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <TableCell
                      sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }}
                    >
                      Full Name
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }}
                    >
                      Type
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <TableRow
                        key={user._id}
                        sx={{
                          "&:hover": {
                            backgroundColor: "rgba(102, 126, 234, 0.05)",
                            transition: "background-color 0.3s ease",
                          },
                        }}
                      >
                        <TableCell sx={{ py: 2 }}>{user.fullName}</TableCell>
                        <TableCell sx={{ py: 2 }}>{user.email}</TableCell>
                        <TableCell sx={{ py: 2 }}>
                          <Box
                            sx={{
                              display: "inline-block",
                              px: 2,
                              py: 0.5,
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              backgroundColor:
                                user.type === "admin"
                                  ? "rgba(102, 126, 234, 0.2)"
                                  : "rgba(76, 175, 80, 0.2)",
                              color:
                                user.type === "admin" ? "#667eea" : "#4caf50",
                            }}
                          >
                            {user.type
                              ? user.type.charAt(0).toUpperCase() +
                                user.type.slice(1)
                              : "Unknown"}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        sx={{ textAlign: "center", py: 4 }}
                      >
                        <Typography color="textSecondary">
                          No users found
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {!loading && users.length > 0 && (
            <Box sx={{ mt: 2, textAlign: "right" }}>
              <Typography variant="body2" sx={{ color: "textSecondary" }}>
                Total users: <strong>{users.length}</strong>
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AdminEmployees;
