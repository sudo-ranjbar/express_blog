

exports.createValidator = (request) => {
    const error_message = []
    if (request.title === "") {
        error_message.push('عنوان نمیتواند خالی باشد')
    }

    if (request.slug === "") {
        error_message.push('نامک نمیتواند خالی باشد')
    }

    if (request.content === "") {
        error_message.push('محتوا نمیتواند خالی باشد')
    }

    if (0 == request.author_id) {
        error_message.push('نویسنده ای انتخاب نشد!')
    }
    return error_message
}