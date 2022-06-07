import type { MockHandler } from 'unplugin-mock/types'

export default [
  {
    url: '/api/ping',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: 'pong!',
      }
    },
  },
  {
    url: '/api/account',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          username: 'tangdaoyuan',
          password: '123',
        },
      }
    },
  },
] as MockHandler[]
