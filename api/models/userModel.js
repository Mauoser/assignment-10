// api/models/userModel.js
// Enhanced user model with role types

const users = [
  {
    id: 1,
    username: "admin1",
    password: "admin123", // In production, use hashed passwords
    email: "admin1@example.com",
    name: "Admin User",
    type: "admin",
  },
  {
    id: 2,
    username: "employee1",
    password: "emp123",
    email: "employee1@example.com",
    name: "John Doe",
    type: "employee",
  },
  {
    id: 3,
    username: "employee2",
    password: "emp456",
    email: "employee2@example.com",
    name: "Jane Smith",
    type: "employee",
  },
  {
    id: 4,
    username: "admin2",
    password: "admin456",
    email: "admin2@example.com",
    name: "Super Admin",
    type: "admin",
  },
];

let nextUserId = 5;

module.exports = {
  findUser: (username, password) => {
    return users.find(
      (u) => u.username === username && u.password === password
    );
  },

  findById: (id) => {
    return users.find((u) => u.id === id);
  },

  createUser: (userData) => {
    // Validate type field
    if (!userData.type || !["admin", "employee"].includes(userData.type)) {
      throw new Error('Invalid user type. Must be "admin" or "employee"');
    }

    // Check if username already exists
    if (users.find((u) => u.username === userData.username)) {
      throw new Error("Username already exists");
    }

    const newUser = {
      id: nextUserId++,
      username: userData.username,
      password: userData.password, // Should be hashed in production
      email: userData.email,
      name: userData.name,
      type: userData.type,
    };

    users.push(newUser);
    return {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      name: newUser.name,
      type: newUser.type,
    };
  },

  getAllUsers: () => {
    // Return all users without passwords
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      type: user.type,
    }));
  },
};
