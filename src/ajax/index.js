/**
 * Created by china on 2018/3/16.
 */
/*
 当前项目接口ajax请求模块
 */
import ajax from './ajax'

export const reqhome = () => ajax('/home')
export const reqleft = () => ajax('/type/left')
export const reqright = () => ajax('/type/right')
export const reqbrand = () => ajax('/brand')
