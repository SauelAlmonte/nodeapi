const Post = require("../models/post")

exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: 'First Post'}, {title: 'Second Response'}]
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // Refactored
    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}
