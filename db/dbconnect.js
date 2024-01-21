const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(`mongodb+srv://mahendy:indore@cluster0.3r3yhsl.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('### Mongo DB connected...');
  } catch (err) {
    console.log(err);
    // Quit server if db connection fails
    process.exit(1);
  }
};

module.exports = connectDb;
