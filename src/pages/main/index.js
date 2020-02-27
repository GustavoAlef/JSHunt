import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";
import Product from "../product";

export default class Main extends Component {
  //armazena as variaveis com as respostas
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  //executa assim que o componente é carregado
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    //acessando a api
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    //preenche as variaveis do state
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="lista-produto">
        {products.map(prod => (
          <article key={prod._id}>
            <strong>{prod.title}</strong>
            <p>{prod.description}</p>
            <Link to={`/products/${Product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proxima
          </button>
        </div>
      </div>
    );
  }
}
