import {handleActions as createReducer} from 'redux-actions';
import {addProductToLocalCart} from '../actions/cart.action';
const initialState = [];
const handleAddProductToLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find(product => product.id === action.payload.id);
  if (product) {
    // 该商品已在购物车中
    product.count = product.count + 1;
  } else {
    // 不在购物车中
    newState.push(action.payload);
  }
  return newState;
};
export default createReducer(
  {
    // 将数据保存至store
    [addProductToLocalCart]: handleAddProductToLocalCart
  },
  initialState
);
