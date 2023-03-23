const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose .connect("mongodb://mario:mariomargjini.12@ac-yyb56s6-shard-00-00.s9wsk5k.mongodb.net:27017,ac-yyb56s6-shard-00-01.s9wsk5k.mongodb.net:27017,ac-yyb56s6-shard-00-02.s9wsk5k.mongodb.net:27017/?ssl=true&replicaSet=atlas-m3ggkw-shard-0&authSource=admin&retryWrites=true&w=majoritymongodb://mario:<password>@ac-yyb56s6-shard-00-00.s9wsk5k.mongodb.net:27017,ac-yyb56s6-shard-00-01.s9wsk5k.mongodb.net:27017,ac-yyb56s6-shard-00-02.s9wsk5k.mongodb.net:27017/?ssl=true&replicaSet=atlas-m3ggkw-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    )
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => console.log('Database', err))
}

module.exports = connectDB