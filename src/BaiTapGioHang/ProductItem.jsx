import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  render() {
    const { prod } = this.props;
    return (
      <div className="card text-white bg-success">
        <img
          className="card-img-top"
          src={prod.img}
          alt="product"
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{prod.name}</h4>
          <p
            className="card-text text-dark"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {prod.price}$
          </p>
          <button
            onClick={() => {
              this.props.detailCart(prod);
            }}
            className="btn btn-info mr-1"
          >
            Chi tiết
          </button>
          <button
            onClick={() => this.props.addCart(prod)}
            className="btn btn-danger"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    detailCart: (productDetail) => {
      const action = {
        type: "DETAIL_CART",
        productDetail: productDetail,
      };
      dispatch(action);
    },
    addCart: (prod) => {
      const productCart = {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        screen: prod.screen,
        img: prod.img,
      };
      const action = {
        type: "ADD_CART",
        productCart: productCart,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);
