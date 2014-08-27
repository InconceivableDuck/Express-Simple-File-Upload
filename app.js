var express = require('express'),
    multer = require('multer'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(multer({ dest: __dirname + '/uploads' }));

app.post('/upload', function(req, res) {
  
  if(!req.files || !req.files.myFile) {
    return res.status(400).send('Bad Request: no uploaded file found.');
  }

  res.status(200).send('Done! File uploaded to: ' + req.files.myFile.path);
});

app.listen(process.env.PORT || 8080);