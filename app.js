const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const requestData = (req, res, next) => {
  if (req.originalUrl.indexOf('favicon.ico') === -1) {
    const nowDate = new Date().toLocaleString()
    const path = req.url
    const method = req.method
    console.log(`${nowDate} | ${method} From ${path}`)
  }
  next()
}

app.use(requestData)
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index', { message: '列出全部Todo' })
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.render('index', { message: '新增 Todo 頁面' })
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.render('index', { message: '顯示一筆Todo' })
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.render('index', { message: 'POST-新增一筆 Todo' })
})

app.post('/:id/delete', (req, res) => {
  res.render('index', { message: 'POST-刪除 Todo' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
