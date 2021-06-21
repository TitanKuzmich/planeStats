require("dotenv").config();

const planeData = require("./data/planes");
const connectDB = require("./config/db");
const Plane = require("./models/Plane");

connectDB();

const importData = async () => {
  try {
    await Plane.deleteMany({});

    await Plane.insertMany(planeData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
