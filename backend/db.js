const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://R3g0s666:thm.local666.me@cluster0.ebgrjft.mongodb.net/foodie?retryWrites=true&w=majority'

const mongoDB = async ()=>{

    // The below code give us error while trying to connect to MongoDB
    // mongoose.connect(mongoURI, (req, res) =>{
    //     console.log("Connected successfully")
    // });

    
    // We use then catch to resolve the above error caused by the above code
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected Successfully');

        const fetched_data_from_collection = mongoose.connection.db.collection("food_items");
        try {
            const data = await fetched_data_from_collection.find({}).toArray();
            // console.log(data);
        } catch (err) {
            console.error(err);
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = mongoDB; // mongoDB function is exported without calling it immediately. So, remove the parentheses after mongoDB in the module.exports line.