import {createAction} from 'redux-actions';

// 发请求
export const addProductToCart = createAction('addProductToCart');
// 将商品添加到本地store
export const addProductToLocalCart = createAction('addProductToLocalCart');
