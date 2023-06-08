const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testDB').then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// '/' 디렉터리에 해당 문구 보내기
app.get('/', (req, res) => {
  res.send('Hello~ 안녕하세요!')
})

// 해당 포트에 앱 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})