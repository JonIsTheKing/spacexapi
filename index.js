const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose
 .connect(`mongodb+srv://trump:Kingdom21@cluster0.jqndj.mongodb.net/celebs?retryWrites=true&w=majority`)
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));

app.listen(PORT, ()=>{
    console.log(`Server on ${PORT}`);
});