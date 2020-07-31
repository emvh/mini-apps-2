const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.use(express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/bitcoin', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-01-01&end=2013-01-30')
  .then((response) => {
    res.status(200).send(response.data.bpi);
  })
  .catch((err) => res.status(404).send(err))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

