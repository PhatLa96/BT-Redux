import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
  renderCart = () => {
    return this.props.cart.map((item, index) => {
      const { id, img, name, price } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img src={img} alt="product" style={{ width: 120 }} />
          </td>
          <td>{name}</td>
          <td>
            <button
              onClick={() => this.props.changeQuantity(index, false)}
              className="btn btn-info"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => this.props.changeQuantity(index, true)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{item.quantity * price}$</td>
          <td>
            <button
              onClick={() => this.props.removeCart(index)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Tên</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <td colSpan="5"></td>
                    <td>Tổng Tiền</td>
                    <td>
                      {this.props.cart.reduce((tongTien, item, index) => {
                        return (tongTien += item.quantity * item.price);
                      }, 0)}$
                    </td>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={() => this.props.makePayment()}
                  type="button"
                  className="btn btn-primary"
                >
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.product.cart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (index) => {
      const action = {
        type: "REMOVE_CART",
        index,
      };
      dispatch(action);
    },
    changeQuantity: (index, quantity) => {
      const action = {
        type: "CHANGE_QUANTITY",
        index,
        quantity,
      };
      dispatch(action);
    },
    makePayment: () => {
      const action = {
        type: "MAKE_PAYMENT",
        
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
