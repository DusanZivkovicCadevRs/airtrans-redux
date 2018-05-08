import React, { Component } from 'react'

export default class Card extends Component {

  state = {
    showMenu: false
  }

  showMenuHandler = (e) => {
    e.preventDefault()
    this.setState(({showMenu}) => ({showMenu: !showMenu}))
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenuHandler}>
          Show menu
        </button>
        {this.showMenu &&   
        <div>
          <button>
            Show menu
          </button>
          <button>
            Show menu
          </button>
          <button>
            Show menu
          </button>
        </div>
  }
     </div>
    );
  }
};