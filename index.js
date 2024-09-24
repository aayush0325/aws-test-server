const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Hello from AWS!"
  })
})

app.listen(3000, () => console.log('Listening to port 3000'))
