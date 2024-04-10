const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect(
        'mongodb+srv://harshmishra040103:8BM4odcg0n4mpwrO@cluster0.mt8ib4e.mongodb.net/blog_app_mern?retryWrites=true&w=majority&appName=Cluster0',
        {
            useNewUrlParser: true,
        }
    );

    console.log('MongoDB Connection Successfully');
};

module.exports = connectDatabase;
