var {
    Post,
    PostImage,
    PostType,
    PostPropertyType,
    PostFurnishing
} = require('./models/post')
const mongoose = require('mongoose'); 

const uri = process.env.MONGODB_URI || 'mongodb://localhost/rose' || 'mongodb+srv://user1:mongodb@cluster0.o1zql.mongodb.net/rose?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 2000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

  mongoose.connect(uri, options).then(connection => {
    console.log("CONEECTION SUCESS","=======");
    PostType.create({name:"1 BHK"})
    PostType.create({name:"2 BHK"})
    PostType.create({name:"3 BHK"})
    PostType.create({name:"4 BHK"})
    PostType.create({name:"5+ BHK"})

    PostPropertyType.create({name:"CONDO"})
    PostPropertyType.create({name:"APARTMENT"})
    PostPropertyType.create({name:"TOWN HOUSE"})
   
    PostFurnishing.create({name:"Furnished"})
    PostFurnishing.create({name:"Semi-Furnished"})
    PostFurnishing.create({name:"UnFurnished"})
  }).catch((err) => {
      console.log(err);
  })