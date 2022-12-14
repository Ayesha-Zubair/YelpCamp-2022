<h1>YelpCamp 2022</h1>

<p>YelpCamp is a full stack application where users can create new campgrounds and can review other's campgrounds. This app supports user authentication and authorization, posts management (creating, editing, and deleting), image uploading, responsive design, etc. YelpCamp is created using Node.js, Express and MongoDB.</p>

<h4>Website Link - <a href="https://ayesha-yelpcamp.herokuapp.com/">https://ayesha-yelpcamp.herokuapp.com/</a></h4>

<h2>Features</h2>

<h4>Informative Cluster Maps to show locations of different campgrounds.</h4>

<img src="/images/index.JPG" width="800" />

<h4>Responsive Design</h4>

<img src="/images/responsive.png" width="800" />

<h4>Users can create, edit and delete campgrounds.</h4>

<img src="/images/new.png" width="800" />

<h4>Users can review campgrounds, and delete their review.</h4>

<img src="/images/reviews.png" width="800" />

<h2>Implementation</h2>

<h3>Languages and Tools</h3>
<ul>
<li>JavaScript</li>
<li>EJS</li>
<li>HTML</li>
<li>CSS</li>
<li>Node.js</li>
<li>Express</li>
<li>Bootstrap</li>
<li>MongoDB</li>
<li>NPM tools:</li>
<ul>
<li>Mongoose</li>
<li>Passport.js</li>
<li>Joi: schema description & data validation</li>
<li>helmet</li>
<li>express-mongo-sanitize</li>
</ul>

<h3>Services</h3>
<ul>
<li><a href="https://cloudinary.com/">Cloudinary<a></li>
<li><a href="https://www.mongodb.com/atlas/database">MongoDB Atlas<a></li>
<li><a href="https://www.mapbox.com/">Mapbox<a></li>
</ul>
</ul>

  <h3>Run it locally</h3>
1. Clone this repository to the local computer

   ```
   git clone https://github.com/Ayesha-Zubair/YelpCamp-2022.git
   cd YelpCamp
   npm install 
   ```

2. Install [MongoDB](https://www.mongodb.com/)

3. Create a Cloudinary account to get your **cloud name**, **API Key** and **API Secret**

4. Create a Mapbox account to get an **API access token**

5. Create an `.env` file in the root of this project and add following information:

   ```
   CLOUDINARY_CLOUD_NAME=<cloud name>
   CLOUDINARY_KEY=<API Key>
   CLOUDINARY_SECRET=<API Secret>
   MAPBOX_TOKEN=<API access token>
   ```

6. Run `mongod`, then run  `node app.js` in the terminal
7. Go to locohost:3000
  

<p> This project is from Colt Steele's <a href="https://www.udemy.com/course/the-web-developer-bootcamp/"> Web Dev Bootcamp 2022</a> with some added features.</p>
