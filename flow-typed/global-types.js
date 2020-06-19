// comment below is for standardJs
/* global Process, Req, Res, Next, Action, __APPVERSION__ */

declare type __APPVERSION__ = string
declare type __CLIENT__ = string

declare type Action = {
    type: string,
    payload: any
}

declare type Process = Object
declare type Req = Object
declare type Res = Object
declare type Next = () => mixed
