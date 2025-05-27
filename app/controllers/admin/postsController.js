const postsModel = require("@models/postsModel");

const userModel = require('@models/userModel')

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

    const users = await userModel.getAllUsers(['id', 'name']);
    
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
        const users = await userModel.getAllUsers(['id', 'name']);
        res.render('admin/posts/create', { layout: 'admin', users, errorResult })
    }else {
        const result = await postsModel.createPost(formData)
    }

    

}