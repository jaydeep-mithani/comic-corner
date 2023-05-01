const mongoose = require("mongoose");

const popularIssuesSchema = new mongoose.Schema({ name: String, issues: Array }, { timestamps: true });

module.exports = mongoose.model("popularIssues", popularIssuesSchema);
