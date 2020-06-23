/* eslint-disable @typescript-eslint/no-var-requires */
const { Pool } = require("pg");

const pool = new Pool();

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
  getProjects
};
