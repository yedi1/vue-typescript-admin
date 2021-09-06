import request from '@/utils/request'

// eslint-disable-next-line import/prefer-default-export
export const getTransactions = (params: any) =>
  request({
    url: '/transactions',
    method: 'get',
    params
  })
