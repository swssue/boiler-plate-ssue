const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

// 클라이언트에서 오는 정보를 서버에서 분석해서 받을 수 있게 해준다.
app.use(bodyParser.urlencoded({extended: true}));
// json 타입 분석해서 가져오기
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



// '/' 디렉터리에 해당 문구 보내기
app.get('/', (req, res) => {
  res.send('Hello~ 안녕하세요! 새해복 많이 받으세요!!!!!!!!') 
})

app.post('/register', async (req, res) =>{
  //회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)
  await user
  .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

// 해당 포트에 앱 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})