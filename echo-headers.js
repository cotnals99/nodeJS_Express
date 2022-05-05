const express = require('express')
const app = express()


const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
  ]


//Send by json format

//   app.get('/api/tours', (req, res)=>{
//     res.json(tours)
// })


//Send by JSON & XML format

app.get('/api/tours', (req, res) => {
    const toursXml = '<?xml version="1.0"?><tours>' +
      tours.map(p =>
        `<tour price="${p.price}" id="${p.id}">${p.name}</tour>`
      ).join('') + '</tours>'
    const toursText = tours.map(p =>
        `${p.id}: ${p.name} (${p.price})`
      ).join('\n')
    res.format({
      'application/json': () => res.json(tours),
      'application/xml': () => res.type('application/xml').send(toursXml),
      'text/xml': () => res.type('text/xml').send(toursXml),
      'text/plain': () => res.type('text/plain').send(toursXml),
    })
  })



  app.get('*', (req, res)=>{
          res.send('Check out <a href="/api/tours">/api/tours</a>!')
      })
      
      
      
//Search by ID
// app.get('/api/tours', (req, res) => res.json(tours))

// app.put('/api/tour/:id', (req, res) => {
//   const p = tours.find(p => p.id === parseInt(req.params.id))
//   if(!p) return res.status(410).json({ error: 'No such tour exists' })
//   if(req.body.name) p.name = req.body.name
//   if(req.body.price) p.price = req.body.price
//   res.json({ success: true })
// })

// app.use('*', (req, res) => res.send(
//   `<p>Use a tool like <a href="https://www.getpostman.com">Postman</a> ` +
//   `or <a href="https://curl.haxx.se/">curl</a> to try the following:</p>` +
//   `<pre>` +
//   `GET /api/tours\n` +
//   `PUT /api/tour/0 with JSON body { "price": 129.99 }\n` +
//   `GET /api/tours`))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}/api/tours\n`))