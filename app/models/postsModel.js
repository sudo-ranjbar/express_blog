const db = require("@database/mysql")

exports.getAll = async () => {

    const [rows, fields] = await db.query(`
            SELECT p.*,u.name
            FROM posts p
            JOIN users u ON p.author_id=u.id
    `);

    return rows;


}

exports.createPost = async (formData) => {
    const [result] = await db.query(`
            INSERT INTO posts SET ?
        `, [formData]);
    console.log(result);
    
    return result
}