
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'alsichat v0.2' });
};