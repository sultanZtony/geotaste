var express = require('express'); //Ensure our express framework has been added
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

// set the view engine to ejs
app.set('views', '/home/node/app/views');
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');
app.use(express.static('resources/styles'));
app.use(express.static(__dirname + '/'));

const dev_dbConfig = {
    host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
	port: 5432,
	database: "d6kushg2shkeat",
	user:  "guiuokmmdjtphs",
	password: "5893f10f2075df912fffd4cdf7009697fa587f1a19343ace208c7f89782a60e7"
	/*host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
	port: 5432,
	database: "d6kushg2shkeat",
	user:  "guiuokmmdjtphs",
	password: "5893f10f2075df912fffd4cdf7009697fa587f1a19343ace208c7f89782a60e7"*/
};

//add code from lab 10 
const dbConfig = dev_dbConfig;

//configure port
/*
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
*/

// Heroku Postgres patch for v10
// fixes: https://github.com/vitaly-t/pg-promise/issues/711

pgp.pg.defaults.ssl = {rejectUnauthorized: false};


var db = pgp(dbConfig);

app.get('/', function(req, res){
    res.render('index.ejs')
});

app.get('/about', function(req, res) {
	res.render('about.ejs');
  });

app.get('/country-id', (req, res) => {
    var id = req.query.country;
	if(id) var query1 = "SELECT * FROM country_info WHERE name = '" + id + "' ;";
	var query2 = "SELECT * FROM songs INNER JOIN label_geo ON songs.label_id = label_geo.label_id WHERE label_geo.label_location ='" + id + "'ORDER BY RANDOM() DESC LIMIT 50;";
	db.task('get-everything', task => {
		return task.batch([
			task.any(query1),
			task.any(query2)
		])
	}).then(data => {
        console.log(data[0]);
        res.status(200).render('country', {
            country: id,
            country_info: data[0][0],
            song_list: data[1] 
        });
    }).catch(error => {
        console.log('Queries failed: ' + error);
        res.status(400).render('country', {
            country: '',
            country_info: '',
            song_list: ''	
        });
    });
});

app.get('/music',function(req,res){
	var pick = req.query.song_choice;
	var song_data = "SELECT * FROM songs INNER JOIN label_geo ON songs.label_id=label_geo.label_id WHERE discogs_id = '"+pick+"'";
	
    var more_label = "SELECT * FROM songs WHERE label_id = (SELECT label_id FROM songs WHERE discogs_id = '"+pick+"') AND NOT discogs_id='"+pick+"' ORDER BY RANDOM() LIMIT 50";
	var more_artist = "SELECT * FROM songs WHERE artist = (SELECT artist FROM songs WHERE discogs_id = '"+pick+"') AND NOT discogs_id='"+pick+"' ORDER BY RANDOM() LIMIT 50";
    
    var more_era = 
        "SELECT * FROM songs "+
        "INNER JOIN label_geo " +
        "ON songs.label_id = label_geo.label_id " +
        //lower date
        "WHERE release_date > "+
        "(SELECT DATE_TRUNC('decade',release_date) FROM songs WHERE discogs_id = '"+pick+"') "+
        //upper date
        "AND release_date < "+
        "(SELECT DATE_TRUNC('decade',release_date + INTERVAL '10 year') FROM songs WHERE discogs_id = '"+pick+"') "+
        //label location
        "AND label_location = "+
       "(SELECT label_location FROM songs INNER JOIN label_geo ON songs.label_id=label_geo.label_id WHERE discogs_id = '"+pick+"') "+
       //does not include original selected song 
       "AND NOT songs.discogs_id='"+pick+"' "+ 
        "ORDER BY RANDOM() LIMIT 50";
    
    db.task('get-everything', task => {
		return task.batch([
			task.any(song_data),
            task.any(more_label),
            task.any(more_artist),
            task.any(more_era)
		]);
	})
	.then(data => {
		console.log(data[0][0])
		res.status(200).render('music.ejs',{
			my_title: "Music Page",
			name: data[0][0].name,
			cover: data[0][0].cover_art,
			artist: data[0][0].artist,
			date: data[0][0].release_date,
			spotify: data[0][0].spotify_id.slice(14),
			label: data[0][0].label_name,
			country: data[0][0].label_location,
            cat_label: data[1],
            cat_artist: data[2],
            cat_era: data[3],
		})
	}).catch(err => {
		console.log('error', err);
		res.status(400).render('music.ejs',{
			my_title: "Music Demo",
			song: 'Error 400',
			cover: '',
			artist: '',
			date: '',
			spotify: '',
			label: '',
			country: '',
            cat_label: '',
            cat_artist: '',
            cat_era: ''
		});
	});

});


// app.get('/account', function(req, res){
//     res.render('account.ejs')
// });

app.get('/login', function(req, res){
    res.render('login.ejs',{ 
        my_title: "Login page",
        error: false,
    })
    sess = req.session;
    sess.username;
   
});

app.post('/signup', function(req, res) { // sign up and displaying it on the profile have a different function, use post for account to display

    var f_name = req.body.firstName;
    var l_name = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var user_name = req.body.username; // document.getElementById("user");
    var insert_into_table = "INSERT INTO users(first_name, last_name, username, password,email) VALUES('" + f_name + "','" + l_name  + "','" + user_name + "','" + password + "','" + email + "');";
    var select_all = "SELECT * FROM users WHERE username = '" + user_name + "';"
    console.log(select_all); 
    db.task('get-everything', task => {
        return task.batch([
            task.any(select_all) // info[0]
        ]);
    })
    .then(info => {
    console.log(info[0].length); 
        if(info[0].length != 0)
        {
            console.log(info[0].length); 
             res.render('login.ejs',{
                my_title: "Profile Page",
                First_name: '',
                Last_name: '',
                Username: '',
                Email: '',
                Password: '',
                error: true,
            })
            return; 
        }
    }) 
    .catch(err => {
            console.log('error', err);
            res.render('login.ejs', {
                my_title: "Profile Page",
                first_name: '',
                Last_name: '',
                Username: '',
                Email: '',
                Password: '',
            })

    });
    

    for ( var i = 0; i < f_name.length; i++)
    {
       if((f_name[i] == '@')|| (f_name[i] == '!')||(f_name[i] == '1')||(f_name[i] == '2')||(f_name[i] == '3')||(f_name[i] == '#')||(f_name[i] == '$'))
       {
          return response.status(400).send("Invalid input: cannot contain any symbols or numbers.");
       }
    }

    for ( var i = 0; i < l_name.length; i++)
    {
       if((l_name[i] == '@')|| (l_name[i] == '!')||(l_name[i] == '1')||(l_name[i] == '2')||(l_name[i] == '3')||(l_name[i] == '#')||(l_name[i] == '$'))
       {
          return response.status(400).send("Invalid input: cannot contain any symbols or numbers.");
       }
    }
    
    db.task('get-everything', task => {
        return task.batch([
            task.any(insert_into_table), // info[0]
            task.any(select_all) // info[1]
        ]);
    })
    .then(info => {
        res.render('index.ejs',{
                my_title: "Profile Page",
                First_name: info[1][0].first_name,
                Last_name: info[1][0].last_name,
                Username: info[1][0].username,
                Email: info[1][0].email,
                Password: info[1][0].password,
            })
    })
    .catch(err => {
            console.log('error', err);
            res.render('account.ejs', {
                my_title: "Profile Page",
                first_name: '',
                Last_name: '',
                Username: '',
                Email: '',
                Password: '',
            })
    });
})

app.post('/login', function(req, res) {
    sess = req.session;
    sess.username = req.body.username; 
    var password = req.body.password;
    var user_name = req.body.username; 
    var select_all = "SELECT * FROM users WHERE username = '" + user_name + "';"
    // window.sessionStorage.setItem("username", user_name);

    db.task('get-everything', task => {
        return task.batch([
            task.any(select_all) // info[0]
        ]);
    })
    .then(info => {
        if(password == info[0][0].password)
        {
            res.render('index.ejs',{
                my_title: "Login page",
                First_name: info[0][0].first_name,
                Last_name: info[0][0].last_name,
                Username: info[0][0].username,
                Email: info[0][0].email,
                Password: info[0][0].password,
                // open up a modal and show 
            })
        }
    })
    .catch(err => {
            console.log('error', err);
            res.render('login.ejs', {
                my_title: "Login page",
                error: true,
                
            })
    });
})

app.get('/account', function(req, res) { // sign up and displaying it on the profile have a different function, use post for account to display

    // console.log(username);
    sess = req.session;
    if (sess.username) {
        var account_user = sess.username;
    }
    else
    {
        console.log('error'); 
    }
    
    var select_all = "SELECT * FROM users WHERE username = '" + account_user + "';"

    db.task('get-everything', task => {
        return task.batch([
            task.any(select_all) // info[0]
        ]);
    })
    .then(info => {
        res.render('account.ejs',{
                my_title: "Profile Page",
                First_name: info[0][0].first_name,
                Last_name: info[0][0].last_name,
                Username: info[0][0].username,
                Email: info[0][0].email,
                Password: info[0][0].password,
                error: false,
                hidden: ""
            })
    })
    .catch(err => {
            console.log('error', err);
            res.render('account.ejs', {
                my_title: "Profile Page",
                First_name: '',
                Last_name: '',
                Username: '',
                Email: '',
                Password: '',
                error: true,
                hidden: "hidden"

            })
    });
})

module.exports = app.listen(3000);
console.log('3000 is the magic port');
