module.exports = {
    userLogin:  (req, res, next) => {
        req.app.get('db').User_Login(req.body.username, req.body.password).then( loginResults => {
        if(loginResults[0]) {
        req.session.userId = loginResults[0].id;
        res.status(200).send('Login successful');
        } else {
        return res.status(403).send('User not found. Access denied');}
        })
    },
    userReg: (req, res, next) => {
        const db = req.app.get('db');
        db.Get_Users(req.body.username).then( (usernameRes) => {
        if( usernameRes[0] ) {
        res.status(403).send('The username entered already exists. Please try a different name.');
        } else {
        db.user_reg(req.body.username, req.body.password).then(regres => {
        res.status(200).send('Registration successful');
        }).catch(err => {
        console.log(err) 
        res.status(500).send(err)})
        }
        })
        }
    };