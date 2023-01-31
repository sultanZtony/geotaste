# CSCI-3308-Fall21-012-03

Project description:

Geotaste is a web app that aggregates music released globally. It can sort released music geographically, by genre, or by popularity. Our app serves to make the discovery of new music as simple as possible.You can see what the most popular songs are. Geotaste makes discovering new music easy, allowing you to connect with your city in a new way. Our motivation behind this was to integrate music with language especially for culture enthusiasts. This website would help us see what songs are produced in different countries and are able to listen through spotify. 

Architecture:

All the code to make this website is under geotaste folder. 

The webpages were coded with EJS, JS, and CSS.The code for this can be seen in the views folder and the resources files.
    -"/resources/scripts" contains JS files
    -"/resources/styles" contains CSS files
    -"/resources/images" contains all image files

    -"/views" contains the ejs files required to render the pages
    -"/views/partials" contains partial ejs data for our header, footer, and navbar used accross the site

    -"/test" contains our test files that will be ran on "docker-compose up"

We used NodeJS to run the server so a "node_modules" folder is present

The back-end accesses a database of music from all around the world, that we created based on information from Wikipedia and Discogs. This information is presented on our music page, and the Spotify api is accessed to provide listening previews. 

The webpage can be accessed at http://luna-server.ddns.net:3000/

To build the website yourself, we recommend that you use the included docker compose file to host a nodejs server using "docker-compose up". This will also run test on the server before it is up. The database is hosted on heroku, so the credentials are needed to make changes or access it. Once the server is locally hosted, simply go to the dedicated port to view the site.
