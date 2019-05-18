const express = require('express')
const app = express()
const port = 3000

const requestData = (req, res, next) => {
  const nowDate = new Date().toLocaleString()
  const path = req.url
  const method = req.method
  console.log(`${nowDate} | ${method} From ${path}`)
  next()
}

app.use(requestData)
// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
