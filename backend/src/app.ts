
let log = console.log.bind(console)
import { Enam } from './model';
import { Person } from './model'
import { getTodos } from './model'
import cors from 'cors'
import express from 'express';
import './play'

let person = new Enam('Md Enamul Hassan')
let p = new Person('Enam')
let app = express();
app.set('json spaces', 2)
app.use(cors())

app.get('/api', (req, res) => {
  res.header("Content-Type", 'application/json');
  res.json(getTodos())
})
app.get('/', (req, res) => {
  res.redirect('/api')
})

app.listen(8080, () => {
  log('Serving on http://localhost:%d', 8080)
})




