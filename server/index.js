const express = require("express");

const app = express();

app.set('secret', 'kj3h4jk34h5k23j');

app.use(require('cors')());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./plugins/db')(app);
require('./routes/admin')(app);

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
