import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  changeServiceProductNumber,
  changeLocalProductNumber
} from '../actions/cart.action';

function* handleAddProductToCart(action) {
  const {data} = yield axios.post('http://localhost:3005/cart/add', {gid: action.payload});
  //  调用action->reducer将数据存储到本地store
  yield put(addProductToLocalCart(data));
}

function* handleLoadCarts() {
  const {data} = yield axios.get('http://localhost:3005/cart');
  yield put(saveCarts(data));
}

function* handleDeleteProductFromCart(action) {
  yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  });
  yield put(deleteProductFromLocalCart(action.payload));
}

function* handleChangeServiceProductNumber(action) {
  const {data} = yield axios.put('http://localhost:3005/cart', action.payload);
  yield put(changeLocalProductNumber(data));
}

export default function* cartSaga() {
  yield takeEvery(addProductToCart, handleAddProductToCart);
  // 从服务端获取购物车数据
  yield takeEvery(loadCarts, handleLoadCarts);
  // 从服务端删除购物车数据
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart);
  // 改变商品数量
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber);
}
