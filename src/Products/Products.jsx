import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import $ from "jquery";

// require("bootstrap/less/bootstrap.less");

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      totalPage: 0,
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get(`https://mystore41.herokuapp.com/api/stores/35/products?page=${this.state.activePage}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({products: response.data.data});
        this.setState({totalPage: response.data.meta.pagination.totalPage });
      });
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.getProducts();
  }

  handleDelete = (productId) => {
    axios.delete(`https://mystore41.herokuapp.com/api/products/${productId}`).
      then((response) => {
        alert('Product Deleted!')
        this.getProducts();
      });
  }

  render() {
    return (
      <div>

           <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>name</th>
              <th>description</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
          { this.state.products.map(product =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.type}</td>
              <td>{product.attributes.name}</td>
              <td>{product.attributes.description}</td>
              <td>
                 <Link to={`/products/${product.id}`}>
                   Show
                 </Link>|
                 <Link to={`/products/${product.id}/edit`}>
                   Edit
                 </Link>|
                 <button onClick={() => window.confirm("Are you sure you wish to delete this product?") && this.handleDelete(product.id)}>
                   Delete
                 </button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.totalPage * 10}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
        />

        <Link to={`/createproduct`}>
          Create Products
        </Link>
      </div>
    );
  }
}