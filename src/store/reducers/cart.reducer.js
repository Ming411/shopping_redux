import {handleActions as createReducer} from 'redux-actions';
import {
  addProductToLocalCart,
  changeLocalProductNumber,
  deleteProductFromLocalCart,
  saveCarts
} from '../actions/cart.action';
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

// 返回的值会直接替换本地state
const handleSaveCarts = (state, action) => action.payload;

const handleDeleteProductFromLocalCart = (state, action) => {
  // 不能直接操作state
  const newState = JSON.parse(JSON.stringify(state));
  const index = newState.findIndex(item => item.id === action.payload);
  console.log(index);
  newState.splice(index, 1);
  return newState;
};

const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find(product => product.id === action.payload.id);
  product.count = action.payload.count;
  // 更新对应商品数量
  return newState;
};

export default createReducer(
  {
    // 将数据保存至store
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]: handleSaveCarts,
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    [changeLocalProductNumber]: handleChangeLocalProductNumber
  },
  initialState
);
