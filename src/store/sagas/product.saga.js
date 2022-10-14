import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import {loadProducts, saveProducts} from '../actions/product.action';

function* handleLoadProducts() {
  // 获取商品数据
  const {data} = yield axios.get('http://localhost:3005/goods');
  // 将数据保存到store
  yield put(saveProducts(data));
}

export default function* productSaga() {
  // 加载商品列表数据
  yield takeEvery(loadProducts, handleLoadProducts);
}
