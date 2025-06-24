const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, field] = await connection.query("select * from users");
  return results;
}

module.exports = {
  getAllUsers,
}