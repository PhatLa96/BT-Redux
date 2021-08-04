import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { showDetail } = this.props;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <h4>{showDetail.name}</h4>
            <img
              src={showDetail.img}
              alt="product"
              className="img-fluid"
              style={{ height: "250px" }}
            />
          </div>
          <div className="col-7">
            <h5>Thông số kỹ thuật</h5>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{showDetail.screen}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{showDetail.backCamera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{showDetail.frontCamera}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{showDetail.desc}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showDetail: state.product.showDetail,
  };
};

export default connect(mapStateToProps,null)(Detail);
