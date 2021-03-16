import React, { Component } from 'react';
import { environment } from '../constants';

class Header extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#enable">On/off</a></li>
	         <li><a className="smoothscroll" href="#userWithId">For user</a></li>
            <li><a className="smoothscroll" href="#gradual">Gradual Rollout</a></li>
            <li><a className="smoothscroll" href="#variants">Variants</a></li>
            <li><a className="smoothscroll" href="#contact">Order</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Unleash-Hosted Demo</h1>
            <h3>This is a single page application written in react.js. It uses events to automatically detect changes and updates the UI without a full page reload.</h3>
            <br />
            <h3>Environment: <pre>{environment}</pre></h3>
            <h2><a href="https://app.unleash-hosted.com/demo" target="_blank" rel="noopener noreferrer" className="link">https://app.unleash-hosted.com/demo</a></h2>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#enable"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
