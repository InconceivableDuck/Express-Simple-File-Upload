var express = require('express'),
    multer = require('multer'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(multer({ dest: __dirname + '/uploads' }));

app.post('/upload', function(req, res) {
  console.log(req.files);
  res.end('Done');
});

app.listen(process.env.PORT || 8080);