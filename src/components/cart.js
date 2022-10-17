import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../store/actions/cart.action';
class Cart extends Component {
  componentDidMount() {
    const {loadCarts} = this.props;
    // 获取服务端购物车数据
    loadCarts();
  }
  // 商品数量改变
  changeProductNumber(cid, event) {
    const {changeServiceProductNumber} = this.props;
    const count = event.target.value;
    changeServiceProductNumber({cid, count});
  }
  render() {
    const {carts, deleteProductFromCart} = this.props;
    return (
      <section className='container content-section'>
        <h2 className='section-header'>购物车</h2>
        <div className='cart-row'>
          <span className='cart-item cart-header cart-column'>商品</span>
          <span className='cart-price cart-header cart-column'>价格</span>
          <span className='cart-quantity cart-header cart-column'>数量</span>
        </div>
        <div className='cart-items'>
          {carts.map(product => (
            <div className='cart-row' key={product.id}>
              <div className='cart-item cart-column'>
                <img
                  className='cart-item-image'
                  src={`http://localhost:3005/${product.thumbnail}`}
                  width='100'
                  height='100'
                  alt=''
                />
                <span className='cart-item-title'>{product.title}</span>
              </div>
              <span className='cart-price cart-column'>￥{product.price}</span>
              <div className='cart-quantity cart-column'>
                <input
                  className='cart-quantity-input'
                  type='number'
                  value={product.count}
                  onChange={e => this.changeProductNumber(product.id, e)}
                />
                <button
                  className='btn btn-danger'
                  type='button'
                  onClick={() => deleteProductFromCart(product.id)}
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='cart-total'>
          <strong className='cart-total-title'>总价</strong>
          <span className='cart-total-price'>
            ￥
            {carts.reduce((total, product) => {
              return (total += product.count * product.price);
            }, 0)}
          </span>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  carts: state.cart
});
const mapDisaptchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDisaptchToProps)(Cart);
