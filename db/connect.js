const mongoose = require('mongoose');

//uri ="mongodb+srv://Shubham123:Shubham123@trendsettersapi.5spf2gv.mongodb.net/TrendSettersAPI?retryWrites=true&w=majority";
//create a fn
const connectDB = (uri) =>{
    //return to uri using .connect method
    console.log("Connected");
    return mongoose.connect(uri,
        {
            useNewUrlParser: true ,
            useUnifiedTopology :true
        });
}

module.exports = connectDB;