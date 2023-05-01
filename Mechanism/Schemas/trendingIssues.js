const mongoose = require("mongoose");

const trendingIssuesSchema = new mongoose.Schema({ name: String, issues: Array }, { timestamps: true });

module.exports = mongoose.model("trendingIssues", trendingIssuesSchema);
