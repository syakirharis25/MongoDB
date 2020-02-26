const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongotube", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => {
        console.log("Your Error", error);
    });