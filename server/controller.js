module.exports = {
    createUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.create_user([username, password]).then(user => {
            res.status(200).json(user)
        }).catch(err => console.log(err));
    },
    loginUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.get_user_by_un_pw([username, password]).then(user => {
            res.status(200).send(user)
        }).catch(err => console.log(err))
    },
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.params;

        db.get_posts_and_author(user_id).then(posts => {
            res.status(200).json(posts)
        }).catch(err => console.log(err))
    },
    updatePosts: (req, res) => {
        const db = req.app.get('db');
        const { post_id } = req.params;
        const { user_id } = req.query;

        db.update_post([post_id, user_id]).then(post => {
            res.status(200).json(post);
        }).catch(err => console.log(err));
    }
}