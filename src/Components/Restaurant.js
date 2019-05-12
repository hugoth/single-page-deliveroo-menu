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
    } else {
      newTab[index].value = newTab[index].value + 1;
    }
    this.setState({
      products: newTab
    });
  };

  handleAddQuantity = item => {
    const newTab = [...this.state.products];
    const index = newTab.indexOf(item);
    console.log(index);

    newTab[index].value++;
    this.setState({
      products: newTab
    });
  };

  handleRemoveQuantity = item => {
    const newTab = [...this.state.products];
    const index = newTab.indexOf(item);
    if (newTab[index].value > 0) {
      newTab[index].value--;
    }

    this.setState({
      counter: newTab
    });
  };

  handleFindTotal = () => {
    const newTab = [...this.state.products];
    const total = newTab.forEach(item => {
      return item.price * item.value;
    });
    console.log(total);
  };

  render() {
    return (
      <div className="App">
        <Header state={this.state} />

        <Menu
          data={this.state.menus}
          products={this.state.products}
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
