const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const flowersRouter = require("./routes/Flowers");
app.use("/flowers", flowersRouter);

db.sequelize.sync().then(()=>{

    app.listen(3210, ()=> {
        console.log("Server running on 3210");
    });

});
