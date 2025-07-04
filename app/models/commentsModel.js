const db = require("@database/mysql")

exports.getAll = async () => {

    const [rows, fields] = await db.query(`
            SELECT c.*, p.title
            FROM comments c
            JOIN posts p ON c.post_id=p.id
            ORDER BY c.created_at DESC
    `);

    return rows;
}

exports.get = async (postID) => {

    const [rows, fields] = await db.query(`
            SELECT p.*,u.name
            FROM posts p
            JOIN users u ON p.author_id=u.id
            WHERE p.id=? LIMIT 1
    `, [postID]);

    return rows.length > 0 ? rows[0] : false;
}

exports.delete = async (postID) => {

    const [result] = await db.query(`DELETE FROM posts WHERE id=? LIMIT 1`, [postID]);

    return result.affectedRows > 0;
}

exports.update = async (postID, updateFields) => {

    const [result] = await db.query(`UPDATE posts SET ? WHERE id=? LIMIT 1`, [updateFields, postID]);

    return result.affectedRows > 0;
}