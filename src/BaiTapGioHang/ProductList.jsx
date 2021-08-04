import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
class ProductList extends Component {
  renderProduct = () => {
    console.log(this.props.products);
    return this.props.products.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem prod={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.productList,
  };
};
export default connect(mapStateToProps)(ProductList);
