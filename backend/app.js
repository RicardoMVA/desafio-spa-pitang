const express = require('express')
const app = express()
const port = 3333
const dotenv = require("dotenv")
dotenv.config()
const axios = require('axios')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
  const options = {
    params: {
      ...req.query,
      api_key: process.env.FLICKR_CHAVE,
    }
  }
  
  const response = await axios.get(`https://api.flickr.com/services/rest/`, options)
  res.send(response.data)
})

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`)
})