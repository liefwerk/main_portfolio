const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/index.controllers");

router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id/delete", deleteUser);
router.put("/users/:id/update", updateUser);

module.exports = router;
