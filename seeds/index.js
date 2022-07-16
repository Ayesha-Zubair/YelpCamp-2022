const mongoose = require('mongoose');
const cities = require('./cities');
const Images = require('./images');
const Users = require('./users');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

// mongoose.connect('mongodb+srv://Ayesha:1234@cluster0.2ixnoug.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelpCamp';

mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async function() {
    await Campground.deleteMany({});
    let prevImg1 = -1;
    for (let i = 0; i < 300; i++) {
        const random = Math.floor(Math.random() * 1000);
        let img1 = Math.floor(Math.random() * Images.length);
        while (img1 === prevImg1) {
            img1 = Math.floor(Math.random() * Images.length);
        }
        prevImg1 = img1;
        let img2 = Math.floor(Math.random() * Images.length);
        while (img2 === img1) {
            img2 = Math.floor(Math.random() * Images.length);
        }
        const user = Math.floor(Math.random() * Users.length);
        const campground = new Campground({
            author: Users[user],
            location: `${cities[random].city}, ${cities[random].state}`,
            geometry: {
                type: 'Point',
                coordinates: [cities[random].longitude, cities[random].latitude]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [Images[img1], Images[img2]],
            price: Math.floor(Math.random() * 30) + 10,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo eius voluptatem quod omnis earum minima quibusdam, asperiores accusantium? Itaque quo sed quibusdam possimus ullam facere, dignissimos aliquid magni officia.'
        });
        await campground.save();
    }
}


// const seedDB = async () => {
//     await Campground.deleteMany({});

    
//     for (let i = 0; i < 200; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const price = Math.floor(Math.random()* 20)+10;
//         const camp = new Campground({
//             //my user id
//             author: '62b1eab8219230b39a4dab08',
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa cupiditate velit, adipisci harum quam rerum ducimus architecto alias asperiores ut voluptatem, saepe sit ab similique dolor explicabo incidunt doloribus!',
//             price,
//             geometry:{
//                 type:'Point',
//                 coordinates:[
//                     cities[random1000].longitude,
//                     cities[random1000].latitude
//                 ]
//             },
//             images:[
//                 {
//                     url: 'https://res.cloudinary.com/dev731mmn/image/upload/v1657612846/YelpCamp/tyfg4cqw7nstzoz3kslg.jpg',
//                     filename: 'YelpCamp/tyfg4cqw7nstzoz3kslg'
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/dev731mmn/image/upload/v1656431188/YelpCamp/z20ce7eiugyalmwsaar2.jpg',
//                     filename: 'YelpCamp/z20ce7eiugyalmwsaar2'
//                 }
//             ]
//         })
//         await camp.save();
//     }
// }

seedDB().then(() => {
    mongoose.connection.close();
})



