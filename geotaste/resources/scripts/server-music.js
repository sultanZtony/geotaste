/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.
		We'll be using `db` as this is the name of the postgres container in our
		docker-compose.yml file. Docker will translate this into the actual ip of the
		container for us (i.e. can't be access via the Internet).
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab,
		we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database. We set this in the
		docker-compose.yml for now, usually that'd be in a seperate file so you're not pushing your credentials to GitHub :).
**********************/
const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'music_db',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

/*Add your other get/post request handlers below here: */
app.get('/music_page',function(req,res){
	var test_names = "SELECT song_name,id FROM music_data";
	db.task('get-everything', task => {
		return task.batch([
			task.any(test_names)
		]);
	})
	.then(data => {
		console.log(data[0]);
		res.render('pages/music',{
			my_title: "Music Demo",
			song: '',
			artist: '',
			album: '',
			date: '',
			spotify: '',
			drop_data: data[0]
		})
	})
	.catch(err => {
		console.log('error', err);
		res.render('pages/music',{
			my_title: "Music Demo",
			song: 'Error',
			artist: '',
			album: '',
			date: '',
			drop_data:'',
			spotify:''
		})
	});
});



app.get('/music',function(req,res){
	var pick = req.query.song_choice;
	var test_names = "SELECT song_name,id FROM music_data";
	var testq = "SELECT * FROM music_data WHERE id = '"+pick+"'";

	db.task('get-everything', task => {
		return task.batch([
			task.any(testq),
			task.any(test_names)
		]);
	})
	.then(data => {
		console.log(data[0]);
		res.render('pages/music',{
			my_title: "Music Demo",
			song: data[0][0].song_name,
			artist: data[0][0].artist,
			album: data[0][0].album,
			date: data[0][0].release_date,
			drop_data: data[1],
			spotify: data[0][0].spot_id,
			genre: data[0][0].genre,
			label: data[0][0].label,
			country: data[0][0].country
		})
	})
	.catch(err => {
		console.log('error', err);
		res.render('pages/music',{
			my_title: "Music Demo",
			song: 'Error',
			artist: '',
			album: '',
			date: '',
			drop_data:'',
			spotify: '',
			genre: '',
			label: '',
			country: ''
		})
	});
});

app.listen(3000);
console.log('3000 is the magic port');
