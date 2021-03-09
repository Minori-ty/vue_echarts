import Mock from 'mockjs'

Mock.mock('http://127.0.0.1/api/list', 'get', {
  'data|5': [
    {
      'id|+1': 0,
      info: '@cparagraph(1,2)',
      done: '@boolean()'
    }
  ],
  meta: {
    msg: '获取成功',
    status: 200
  }
})
