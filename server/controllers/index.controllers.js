const { Pool } = require("pg");

const pool = new Pool({
  host: "45.33.98.225",
  user: "liefwerk",
  password: "JS3j2h9qQNhj7V",
  database: "main_portfolio",
  post: "5432",
});

const getProjects = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT id, title, img_url, date, dev_type, tags, is_showcased, site_url, content FROM projects"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjects,
};
