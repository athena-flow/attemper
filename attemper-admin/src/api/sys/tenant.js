import request from '@/utils/request'
import { APIPath } from '@/settings'

export const listReq = (params) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + APIPath.LIST,
    method: 'get',
    params: params
  })
}

export const addReq = (data) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + APIPath.ADD,
    method: 'post',
    data: data
  })
}

export const updateReq = (data) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + APIPath.UPDATE,
    method: 'put',
    data: data
  })
}

export const removeReq = (data) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + APIPath.REMOVE,
    method: 'delete',
    data: data
  })
}

export const getReq = (params) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + APIPath.GET,
    method: 'get',
    params: params
  })
}

export const getTagsReq = (params) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + '/tag',
    method: 'get',
    params: params
  })
}

export const updateTagReq = (data) => {
  return request({
    url: APIPath.SYS + APIPath.TENANT + '/tag',
    method: 'put',
    data: data
  })
}

