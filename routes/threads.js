
/*
 * Thread route handlers.
 */

exports.get = function(request, response) {

};

exports.getOne = function(request, response) {
  var thread = {
    id: request.params['id'],
    author: 'Karan Sheth',
    content: 'This is an example of some content.',
    boardId: 0,
    createDate: new Date(),
    updateDate: null,
    postCount: 0
  };
  response.send(thread);
};

exports.save = function(request, response) {

};

exports.delete = function(request, response) {

};