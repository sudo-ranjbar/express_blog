const postsModel = require("@models/postsModel");

const usersModel = require('@models/usersModel')

const { toPersianDate } = require('@services/dateService')

const postValidator = require('@validators/createPostValidator')

exports.index = async (req, res) => {

    const posts = await postsModel.getAll();

    const presentedPosts = posts.map(post => {
        post.shamsi_c_at = toPersianDate(post.created_at)
        return post
    })

    res.render('admin/posts/index', { layout: 'admin', posts: presentedPosts });
}

// create form
exports.create = async (req, res) => {

    const users = await usersModel.getAllUsers(['id', 'name']);
    
    res.render('admin/posts/create', {layout: 'admin', users})
}

// store to db
// TODO use proper validation with SESSIONS
// errors must be stored in a session and then injected to the create view

exports.store = async (req, res) => {

    const formData = {
        author_id: req.body.author_id,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status,
    }

    const errorResult = postValidator.createValidator(formData)

    if (errorResult.length > 0) {
        const users = await usersModel.getAllUsers(['id', 'name']);
        return res.render('admin/posts/create', { layout: 'admin', users, errorResult })
    }
    
    const result = await postsModel.createPost(formData)
    if (result.insertId) {
        res.redirect('/admin/posts')
    }

}

exports.remove = async (req, res) => {

    const postID = req.params.postID

    if (parseInt(postID) === 0) {
        res.redirect('/admin/posts')
    }

    const result = await postsModel.delete(postID)

    if(result) {
        res.redirect('/admin/posts');
    }
}


exports.edit = async (req, res) => {

    const postID = req.params.postID

    if (parseInt(postID) === 0) {
        res.redirect('/admin/posts')
    }

    const post = await postsModel.getPost(postID)

    if (post) {

        const users = await usersModel.getAllUsers(['id', 'name']);

        res.render('admin/posts/edit', { layout: 'admin', users, post });
    }
}

exports.update = async (req, res) => {

    const postID = req.params.postID

    if (parseInt(postID) === 0) {
        res.redirect('/admin/posts')
    }

    const formData = {
        author_id: req.body.author_id,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status,
    }

    const result = await postsModel.update(postID, formData);

    return res.redirect('/admin/posts');

}