var http = require('http'),
    url = require('url');

exports.Fiftyone = function() {
  function shorten(url , callback) {
    var query = 'url=' + escape(url);
    var options = {
      host: '51.fi',
      port: 80,
      path: "/api/v1/create?" + query
    };
    http.get(options, function(res) {
      res.setEncoding('utf8');
      var body = "";
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        if (callback) {
          callback(JSON.parse(body));
        }
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  };
  
  return {
    shorten: shorten
  }
};

