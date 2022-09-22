require("dotenv").config();

const dev = {
    app:{
       port : process.env.PORT || 4000
    },
    db:{
        url:  "mongodb://localhost:27017/rest-api-mvc-with-db",
    },
};

module.exports = dev;