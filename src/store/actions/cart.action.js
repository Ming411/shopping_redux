import {createAction} from 'redux-actions';

// 发请求将加入购物车的数据同步到服务端
export const addProductToCart = createAction('addProductToCart');
// 将商品添加到本地store
export const addProductToLocalCart = createAction('addProductToLocalCart');

/* 从服务器获取购物车列表数据 */
export const loadCarts = createAction('loadCarts');
// 将数据保存到本地
export const saveCarts = createAction('saveCarts');

// 向服务端发请求删除商品
export const deleteProductFromCart = createAction('deleteProductFromCart');
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart');

// 改变商品数量
export const changeServiceProductNumber = createAction('changeServiceProductNumber');
export const changeLocalProductNumber = createAction('changeLocalProductNumber');
