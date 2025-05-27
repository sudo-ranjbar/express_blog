const postsModel = require("@models/postsModel");

const userModel = require('@models/userModel')

const { toPersianDate } = require('@services/dateService')

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
let error_message = []

exports.store = async (req, res) => {

    const formData = {
        author_id: req.body.author_id,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status,
    }

    // if (0 == formData.author_id) {

    //     const authorError = 'نویسنده ای انتخاب نشد!'

    //     // if error_message.
        
    //     error_message = [...error_message, authorError]
        
    //     res.send({ layout: 'admin', error_message })

    //     return
        
    // }

    const result = await postsModel.createPost(formData)

    res.send(req.body)
}