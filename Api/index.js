const dotenv = require('dotenv')
dotenv.config({path : './config.env'})

const port = process.env.port | 3000;
const app = require('./app');


app.listen(port, () => {
  console.log(`Backend of Sahayak is listening to you on  Port no :${port}`)
})

