const { Pool } = require("pg");

const pool = new Pool({
  host: "45.33.98.225",
  user: "liefwerk",
  password: "JS3j2h9qQNhj7V",
  database: "firstapi",
  post: "5432",
});

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT id, name, email FROM users");
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email]
    );
    console.log(response);
    res.json({
      message: "User Added Successfully",
      body: {
        user: { name, email },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json(`User ${id} deleted successfully.`);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const response = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );
    console.log(response);
    res.json(`User ${id} updated successfully.`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
};
