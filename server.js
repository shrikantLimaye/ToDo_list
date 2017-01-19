var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    todoController = require('./client/server/controller/toDo-controller.js'),
    mongoose       = require('mongoose'),
    cfenv          = require('cfenv');

//mongoose.connect('mongodb://localhost:27017/todo');
//mongoose.connect("vcap_services['mlab'][0].credentials.uri");

var appEnv = cfenv.getAppEnv();
var mongoLabUrl = appEnv.getServiceURL('mongome');
if (mongoLabUrl == null) {
	//local or prod development
	mongoose.connect('mongodb://localhost:27017/todo');
} else {
	//cloud foundry
	mongoose.connect(mongoLabUrl);
}

    
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));


app.get('/api/todos', todoController.list);
app.post('/api/todos', todoController.create);

app.listen(process.env.PORT || 4000);

// anjan@hcl.com