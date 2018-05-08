import React, { Component } from 'react'

export default class Card extends Component {

  state = {
    displayMenu: false
  }

  showMenuToggle = (e) => { this.setState(({displayMenu}) => ({displayMenu: !displayMenu})) }

  render() {
    return (
      <div>
        <button onClick={this.showMenuToggle}>
          Show menu
        </button>
        {this.state.displayMenu &&   
        <div>
          <button onClick={this.showMenuToggle}>
            Show menu
          </button>
          <button onClick={this.showMenuToggle}>
            Show menu
          </button>
          <button onClick={this.showMenuToggle}>
            Show menu
          </button>
        </div>
      }
     </div>
    );
  }
};