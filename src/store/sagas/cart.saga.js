import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {addProductToCart, addProductToLocalCart} from '../actions/cart.action';

function* handleAddProductToCart(action) {
  const data = yield axios.post('http://localhost:3005/cart/add', {gid: action.payload});
  //  调用action->reducer将数据存储到本地store
  yield put(addProductToLocalCart(data));
}

export default function* cartSaga() {
  yield takeEvery(addProductToCart, handleAddProductToCart);
}
