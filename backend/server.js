require("dotenv").config();
const express = require("express");
const planeRoutes = require("./routes/planeRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/planes", planeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
