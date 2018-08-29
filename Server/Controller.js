module.exports = {
    userLogin:  (req, res, next) => {
        console.log('Hit Login Ctrl.')
        req.app.get('db').User_Login(req.body.username, req.body.password).then( loginResults => {
        //
        if(loginResults[0]) {
        req.session.user_id = loginResults[0].userid;
        //
        res.status(200).send('Login successful');
        } else {
        return res.status(403).send('User not found. Access denied');}
        })
    },
    userReg: (req, res, next) => {
        console.log('Hit Register Ctrl.')
        const db = req.app.get('db');
        db.Get_Users(req.body.username).then( (usernameRes) => {
        //
        if( usernameRes[0] ) {
        res.status(403).send('This Username already exists.');
        //
        } else {
        db.User_Reg(req.body.username, req.body.password).then(regres => {
        req.session.user_id = regres[0].userid;
        res.status(200).send('Registration successful');
        }).catch(err => {
        console.log(err) 
        res.status(500).send(err)})
        }
        })
    },
    userLogout: (req, res, next) => {
        console.log('Hit Logout Ctrl.')
        req.session.destroy(function() {
            res.sendStatus(200);
          });
    },
    createProperty: (req, res, next) => {
        console.log('Hit Create Ctrl.')
        const db = req.app.get('db');
        db.Create_Property(req.session.user_id,
                             req.body.prop_name,
                             req.body.prop_desc,
                             req.body.address,
                             req.body.city,
                             req.body.state,
                             req.body.zip,
                             req.body.img_url,
                             req.body.loan_amt,
                             req.body.mon_mort,
                             req.body.rent)
        .then(properties => { res.status(200).send(properties); })
        .catch( err => {
        console.log(err);
        res.status(500).send(err);
        });
    },
    getProperties: (req, res, next) => {
        console.log('Hit Get Ctrl.')
        const db = req.app.get('db');
        db.Get_Properties(req.session.user_id)
        .then(properties => { 
        res.status(200).send(properties); })
        .catch( err => {
        console.log(err);
        res.status(500).send(err);
        });
    },
    delProperty: (req, res, next) => {
        console.log('Hit Delete Ctrl.')
        const db = req.app.get('db');
        db.Delete_Property(+req.params.propId) // params are passed as strings and need to be converted to a int
        .then(properties => { 
        db.Get_Properties(req.session.userId)
        .then(properties => { res.status(200).send(properties); })
        .catch( err => {
        console.log(err);
        res.status(500).send(err);
        });
      });
    }
};