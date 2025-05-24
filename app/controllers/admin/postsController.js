const postsModel = require("../../models/postsModel");

exports.index = async (req, res) => {

    const posts = await postsModel.getAll();

    res.render('admin/posts/index', { layout: 'admin', posts: posts });
}