// 배포 환경에 따라 key 설정 방법이 다른데
// 배포한 경우
if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}
// 로컬인 경우
else{
    module.exports = require('./dev.js')
}
