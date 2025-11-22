import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/user";

// Thunks
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/jobs`);
      return response.data.jobs;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch jobs."
      );
    }
  }
);

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (
    { companyName, jobTitle, description, salary },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${API_URL}/create/job`, {
        companyName,
        jobTitle,
        description,
        salary,
      });
      return response.data.job;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to create job."
      );
    }
  }
);

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Jobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create Job
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = jobsSlice.actions;
export default jobsSlice.reducer;
