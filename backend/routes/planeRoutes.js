const express = require("express"); //подключение
const router = express.Router();
const {
  getPlanes,
  getPlaneById,
  addPlane,
  deletePlanes,
  removePlaneById
} = require("../controller/planeControllers");

// /api/products....
router.get("/", getPlanes);
router.get("/:id", getPlaneById);
router.post("/add", addPlane);
router.post("/delete", deletePlanes);
router.post("/remove/:id", removePlaneById);

module.exports = router;
