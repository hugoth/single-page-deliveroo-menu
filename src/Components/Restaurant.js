import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import axios from "axios";
import { Spinner } from "evergreen-ui";

class Restaurant extends Component {
  state = {
    isloaded: false,
    restaurant: {},
    menus: {},
    products: [],
    total: 0
  };

  handleAddItem = item => {
    let number = Number(item.price) + 0.444;
    console.log(number);
    console.log(Number(number.toFixed(2)));

    const newTab = [...this.state.products];
    let newTotal = this.state.total;
    const index = newTab.findIndex(x => {
      return x.id === item.id;
    });

    if (index < 0) {
      const newProduct = {
        id: item.id,
        price: item.price,
        title: item.title,
        value: 1
      };
      newTab.unshift(newProduct);
      newTotal += Number(item.price);
    } else {
      newTab[index].value = newTab[index].value + 1;
      newTotal += Number(newTab[index].price);
    }

    this.setState({
      products: newTab,
      total: newTotal
    });
  };

  handleAddQuantity = item => {
    const newTab = [...this.state.products];
    const index = newTab.indexOf(item);
    newTab[index].value++;

    let newTotal = this.state.total + Number(newTab[index].price);

    this.setState({
      products: newTab,
      total: newTotal
    });
  };

  handleRemoveQuantity = item => {
    const newTab = [...this.state.products];
    const index = newTab.indexOf(item);
    let newTotal = this.state.total;
    if (newTab[index].value > 0) {
      newTab[index].value--;
      newTotal = newTotal - Number(newTab[index].price);
    }

    this.setState({
      products: newTab,
      total: newTotal
    });
  };

  render() {
    if (this.state.isloaded === false) {
      return (
        <div id="Spinner">
          <Spinner size={70} />
        </div>
      );
    }
    return (
      <div className="App">
        <Header restaurant={this.state.restaurant} />

        <div className="content-h">
          <Menu
            data={this.state.menus}
            products={this.state.products}
            total={this.state.total}
            onClick={this.handleAddItem}
            onAdd={this.handleAddQuantity}
            onRemove={this.handleRemoveQuantity}
          />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menus: response.data.menu,
        isloaded: true
      });
    });
  }
}

export default Restaurant;
