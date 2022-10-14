import {createAction} from 'redux-actions';

// 发请求获取数据
export const loadProducts = createAction('load products');
// 将数据保存到store
export const saveProducts = createAction('save products');
