import React, { Component } from 'react';

class Gradual extends Component {
  render() {

   const toggle = this.props.toggles.step3;
   const userId = this.props.userId;

 
    return (
      <section id="gradual" className="dark">
         <div className="row">
            <div className="three columns">
               <i className="fa fa-bar-chart-o large-icon"></i>
            </div>
            <div className="nine columns main-col">
               <h2>Step 3: Gradual rollout</h2>

               <p>
                  Sometimes we want to expose a new feature to a percentage of real users. This is a nice way to start testing the feature, without taking to much risk. 
                  We us the <span className="white"> flexibleRollout </span> strategy to do this. With this strategy you can define the percentage of your users you want to 
                  expose your new toggle for. 
               </p>
               <p>
                  Your task is to locate the feature toggle named <span className="white"> demoApp.step3</span> and play with the percentage rollout. The unleash SDKs 
                  gurantees stickiness for users, which means that if a user is considered within a target group this will be in that group as long as you increase 
                  the rollout percentage.
               </p>


               {toggle ? <img src="/images/demo3.png" alt="" /> : null}
               <h4>
                  <span className="white">demoApp.step3</span> is {toggle ? <span className="green"> enabled</span>: <span className="red">disabled</span>}  for userId {userId}
               </h4>
            </div>
         </div>
      </section>
    );
  }
}

export default Gradual;
