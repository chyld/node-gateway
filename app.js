var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {

  switch(req.headers.host){
    case 'domain.com':
      bounce(3000);
      break;
    case 'x.domain.com':
      bounce(3001);
      break;
    case 'y.domain.com':
      bounce(3002);
      break;
    default:
      res.statusCode = 404;
      res.end('no such host');
  }

});

server.listen(8000);

