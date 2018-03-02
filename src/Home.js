import React, { Component } from "react";
class Home extends Component {
  //   componentDidMount() {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }
  render() {
    // return pug`
    //   div
    //     h1 My Component
    //     p This is my component using pug.
    //   `;

    return (
      <div>
        <h2>Introduction</h2>
        <p>This is a SPA (Single Page Application) website that was built from ReactJS.</p>
        <ol>
        <li>CoffeeScript</li>
        <li>Pug</li>
        <li>ReactJS</li>
        <li>Babel</li>
      </ol>
      </div>
    );
  }
}

export default Home;
