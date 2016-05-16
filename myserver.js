var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var location = {'location':'home', 'activity':'sleeping'};

function update(data) {
    
}

router.use(bodyParser.json());

router.get('/my_location', function(req, res, next) {
    res.json(location);
    next();
});

router.post('/my_location', function(req, res, next) {
    var data = {
        'latitude': req.headers.latitude,
        'longitude': req.headers.longitude, 
        'delay': req.headers.delay
    };
    res.json(update(data));
    next();
});

app.use('/api', router);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log("Location server started");
});