const cors = require('cors')
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const loginRouter = require('./routes/loginRoute');
const milagresRouter = require('./routes/milagresRoute');
const userRouter = require('./routes/userRoute');

const app = express();

 /* async function testFetch() {
    const res = await fetch('https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css');
    const options = {
        customCssUrl: res,
        };
    return options
} */

var options = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'
  };
app.use(express.json());
app.use(cors()) // Use this after the variable declaration
app.use('/post', milagresRouter)
app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

module.exports = app;