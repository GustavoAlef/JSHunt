import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  //armazena as variaveis com as respostas
  state = {
    products: []
  };

  //executa assim que o componente é carregado
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    //acessando a api
    const response = await api.get("/products");

    //preenche as variaveis do state
    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="lista-produto">
        {products.map(prod => (
          <article key={prod._id}>
            <strong>{prod.title}</strong>
            <p>{prod.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
