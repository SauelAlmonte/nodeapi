const Post = require('../models/post')

exports. getPosts = (req, res) => {
    res.json({
        post: [
            {title: 'First Post'},
            {title: 'Second Response'}
        ]
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log('Creating Post', req.body)
}
