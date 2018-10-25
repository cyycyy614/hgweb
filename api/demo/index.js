import instance from './instance';
import { convertRESTAPI } from '../util';

/** swagger test */
function swagger_get(opts) {
  return instance({
    method: 'get',
    url:  '/swagger',
    opts: opts
  });
}

/** 支持接口代理的mock，试试在 url 上加 ?s={数字} */
function proxy_get(opts) {
  return instance({
    method: 'get',
    url:  '/proxy',
    opts: opts
  });
}

/** 带随机数据的mock */
function mock_get(opts) {
  return instance({
    method: 'get',
    url:  '/mock',
    opts: opts
  });
}

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
function query_get(opts) {
  return instance({
    method: 'get',
    url:  '/query',
    opts: opts
  });
}

/** 支持 restful 的mock，替换 id 试试 */
function restful_id_list_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/restful/:id/list', opts),
    opts: opts
  });
}


/** 列表数据 */
function getfindmovielist_get(opts) {
  return instance({
    method: 'get',
    url:  '/getfindmovielist',
    opts: opts
  });
}
/** 列表数据 */
function getChannelData_get(opts) {
  return instance({
    method: 'get',
    url:  '/getChannelData',
    opts: opts
  });
}
/** 列表数据 */
function getUserIndexData_get(opts) {
  return instance({
    method: 'get',
    url:  '/getUserIndexData',
    opts: opts
  });
}

function getMovieCategoryList_get(opts) {
  return instance({
    method: 'get',
    url:  '/getMovieCategoryList',
    opts: opts
  });
}

function getNoticeDetailData_get(opts) {
  return instance({
    method: 'get',
    url:  '/getNoticeDetailData',
    opts: opts
  });
}


export {
    swagger_get,
    proxy_get,
    mock_get,
    query_get,
    restful_id_list_get,
    getfindmovielist_get,
    getChannelData_get,
    getUserIndexData_get,
    getMovieCategoryList_get,
    getNoticeDetailData_get
};
