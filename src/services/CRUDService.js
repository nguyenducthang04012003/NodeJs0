const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, field] = await connection.query("select * from users");
  return results;
}

const getUserById = async (userId) => {
  const [results, field] = await connection.query(
    `select * from users where id = ?`,
    [userId]
  );
  const user = results && results.length > 0 ? results[0] : {};
  return user;
};

const postCreateUser = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO users  (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return results;
};

const updateUserById = async (email, name, city, userId) => {
  const [results, field] = await connection.query(
    `UPDATE users u 
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, userId]
  )
  return results;
}

module.exports = {
  getAllUsers,
  getUserById,
  postCreateUser,
  updateUserById,
};