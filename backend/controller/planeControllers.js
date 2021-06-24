const Plane = require("../models/Plane");

const getPlanes = async (req, res) => {
  try {
    const planes = await Plane.find({});
    res.json(planes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getPlaneById = async (req, res) => {
  try {
    const plane = await Plane.findById(req.params.id);

    res.json(plane);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removePlaneById = async (req, res) => {
  try {
    await Plane.findByIdAndDelete(req.params.id);

    const planes = await Plane.find({});
    res.json(planes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addPlane= async (req, res) => {
  try {
    const {name, description, price, countInStock, imageUrl} = req.body;
    const plane = new Plane({name, description, price, countInStock, imageUrl});

    await plane.save();

    res.status(200).json(plane);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deletePlanes = async (req, res) => {
  try {
    await Plane.deleteMany({});

    res.status(200).json({message: "Оплата прошла успешно!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getPlanes,
  getPlaneById,
  addPlane,
  deletePlanes,
  removePlaneById
};
