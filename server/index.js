const express = require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())


require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(4000, () => {
    console.log('http://localhost:4000')
});