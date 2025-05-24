const db = require("../../database/mysql")

exports.getAll = async () => {

    const [rows, fields] = await db.query("SELECT * FROM posts");

    return rows;


}