import {handleActions as createReducer} from 'redux-actions';
import {saveProducts} from '../actions/product.action';
const initialState = [];
const handleSaveProducts = (state, actions) => actions.payload;
export default createReducer(
  {
    // 将数据保存至store
    [saveProducts]: handleSaveProducts
  },
  initialState
);
