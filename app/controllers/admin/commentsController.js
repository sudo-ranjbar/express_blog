const postsModel = require("@models/postsModel");

const usersModel = require('@models/usersModel');

const commentsModel = require('@models/commentsModel');

const {toPersianDate} = require('@services/dateService')



exports.index = async (req, res) => {

    const comments = await commentsModel.getAll();

    const presentedComments = comments.map(comment => {

        comment.shamsi_c_at = toPersianDate(comment.created_at, format = 'YYYY/MM/DD')

        return comment
    })

    res.render('admin/comments/index', { layout: 'admin', comments: presentedComments });
}