import { db } from "../libs/db.js";

export const createProblem = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error in create-problem controller");
    res.status(500).json({
      error: "Error creating problem",
    });
  }
};

export const getAllProblems = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error getting all problems controller");
    res.status(500).json({
      error: "Error getting all problems",
    });
  }
};

export const getProblemById = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error getting problem controller");
    res.status(500).json({
      error: "Error getting problem",
    });
  }
};

export const updateProblem = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error in update problem controller");
    res.status(500).json({
      error: "Error in updating the problem",
    });
  }
};

export const deleteProblem = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error delete problem controller");
    res.status(500).json({
      error: "Error deleting the problem",
    });
  }
};

export const getAllSolvedProblems = (req, res) => {
  try {
  } catch (error) {
    console.error(error, "Error getting solved problem controller");
    res.status(500).json({
      error: "Error in getting solved problems",
    });
  }
};
