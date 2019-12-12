import React, { Component } from 'react';

class Enable extends Component {
  render() {

 
    return (
      <section id="enable" className="dark">
         <div className="row">
            <div className="three columns">
               <i className="fa fa-toggle-right large-icon"></i>
            </div>
            <div className="nine columns main-col">
               <h2>Step 1: Enable/disable feature toggle</h2>

               <p>
                  The simplest way to use a feature toggles is to enable or disable it for everyone (on/off). 
                  We us the <span className="white"> default </span> activation strategy to do this.

               </p>
               <p>
                  Your task is to locate the feature toggle named <span className="white"> demoApp.step1 </span> 
                  and try to enable and disable the feature toggle. Make sure you are using the "default" activation strategy.
               </p>

               {this.props.toggles.step1 ? <img src="/images/demo.jpg" alt="" /> : null}


               <h4>
                  <span className="white">demoApp.step1</span> is {this.props.toggles.step1 ? <span className="green"> enabled</span>: <span className="red">disabled</span>}
               </h4>

            </div>
         </div>
      </section>
    );
  }
}

export default Enable;
