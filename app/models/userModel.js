const db = require("@database/mysql")





exports.getAllUsers = async (columns=[]) => {

    const sqlColumns = columns.length > 0 ? columns.join(',') : '*';

    const [rows, fields] = await db.query(`
            SELECT ${sqlColumns}
            FROM users
    `);
    
    return rows;
}

exports.getUser = async () => {
    return []
}