import axios from "../../src";

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

axios({
  url: '/base/get',
  params: {
    foo: 'bar',
    bax: null
  }
})

axios({
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

axios({
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})