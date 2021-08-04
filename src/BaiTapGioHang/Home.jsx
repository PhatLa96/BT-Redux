import React, { Component } from "react";
import Cart from "./Cart";
import Detail from "./Detail";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let tsl = this.props.cart.reduce((tongSL, item, index) => {
      return (tongSL += item.quantity);
    }, 0);
    return (
      <div>
        <h1 className="text-center">Bài tập giỏ hàng</h1>
        <div className="text-right">
          <span
            className="text-danger mr-5"
            data-toggle="modal"
            data-target="#modelId"
            style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold" }}
          >
            <i className="fa fa-shopping-cart mr-1" />
            Giỏ hàng ({tsl})
          </span>
        </div>
        <ProductList />
        {this.props.showDetail && <Detail />}
        <Cart />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showDetail: state.product.showDetail,
    cart: state.product.cart,
  };
};

export default connect(mapStateToProps)(Home);
