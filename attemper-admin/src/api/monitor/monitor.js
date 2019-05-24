import request from '@/utils/request'
import { APIPath } from '@/settings'

export const listReq = (params) => {
  return request({
    url: APIPath.DISPATCH + APIPath.MONITOR + APIPath.LIST,
    method: 'get',
    params: params
  })
}

export const listActReq = (params) => {
  return request({
    url: APIPath.DISPATCH + APIPath.MONITOR + APIPath.LIST + '/act',
    method: 'get',
    params: params
  })
}

