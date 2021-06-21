const Product = require("../models/Plane");

const getPlanes = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const sortPlanes = async (req, res) => {
  try {
    const {sortType, field} = req.params

    const products = await Product.find({}, {"sort": [`${field}`, sortType]})
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getPlaneById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removePlaneById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addPlane= async (req, res) => {
  try {
    const {name, description, price, countInStock, imageUrl} = req.body;
    const product = new Product({name, description, price, countInStock, imageUrl});

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deletePlanes = async (req, res) => {
  try {
    await Product.deleteMany({});

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
  removePlaneById,
  sortPlanes
};
