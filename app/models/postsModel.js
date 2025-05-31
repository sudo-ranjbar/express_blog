const db = require("@database/mysql")

exports.getAll = async () => {

    const [rows, fields] = await db.query(`
            SELECT p.*,u.name
            FROM posts p
            JOIN users u ON p.author_id=u.id
            ORDER BY p.created_at DESC
    `);

    return rows;
}

exports.getPost = async (postID) => {

    const [rows, fields] = await db.query(`
            SELECT p.*,u.name
            FROM posts p
            JOIN users u ON p.author_id=u.id
            WHERE p.id=? LIMIT 1
    `, [postID]);

    return rows.length > 0 ? rows[0] : false;
}

exports.createPost = async (formData) => {
    const [result] = await db.query(`INSERT INTO posts SET ?`, [formData]);
    
    return result
}

exports.delete = async (postID) => {

    const [result] = await db.query(`DELETE FROM posts WHERE id=?`, [postID]);

    return result.affectedRows > 0;
}

exports.edit = async (postID) => {

    const [result] = await db.query(`DELETE FROM posts WHERE id=?`, [postID]);

    return result.affectedRows > 0;
}