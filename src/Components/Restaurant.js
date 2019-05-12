import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import axios from "axios";

class Restaurant extends Component {
  state = {
    restaurant: {},
    menus: {},
    products: [],
    total: null
  };

  handleAddItem = item => {
    const newTab = [...this.state.products];
    let newTotal = this.state.total;
    const index = newTab.findIndex(x => {
      return x.id === item.id;
    });
    console.log(item);
    console.log(index);

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
    console.log(index);
    newTab[index].value++;

    const newTotal = this.state.total + Number(newTab[index].price);

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
      counter: newTab,
      total: newTotal
    });
  };

  render() {
    return (
      <div className="App">
        <Header state={this.state} />

        <Menu
          data={this.state.menus}
          products={this.state.products}
          total={this.state.total}
          onClick={this.handleAddItem}
          onAdd={this.handleAddQuantity}
          onRemove={this.handleRemoveQuantity}
        />
        <button onClick={this.handleFindTotal} />
      </div>
    );
  }

  async componentDidMount() {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");

    this.setState({
      restaurant: response.data.restaurant,
      menus: response.data.menu
    });
  }
}

export default Restaurant;
