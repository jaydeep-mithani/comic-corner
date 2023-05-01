const mongoose = require("mongoose");

const latestIssuesSchema = new mongoose.Schema({ name: String, issues: Array }, { timestamps: true });

module.exports = mongoose.model("latestIssues", latestIssuesSchema);
