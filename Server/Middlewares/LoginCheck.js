module.exports = function(req, res) {
    console.log(req.session)
  if (req.session.user) {
    res.status(200).send();
    console.log('logged in')
  }
 else {
     console.log('not logged in')
    res.status(403).send()}
};