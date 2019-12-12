import React, { Component } from 'react';

class Gradual extends Component {
  render() {

   const toggle = this.props.toggles.step4;
   const userId = this.props.userId;

 
    return (
      <section className="light" id="variants">
         <div className="row">
            <div className="three columns">
               <i className="fa fa-plus-square-o large-icon"></i>
            </div>
            <div className="nine columns main-col">
               <h2>Step 4: Variants</h2>

               <p>
                  Sometimes we want to expose a new feature to a percentage of real users. This is a nice way to start testing the feature, without taking to much risk. 
                  We us the <span className="black"> Variants </span> to do this. You can define as many varaints for a feture toggle as you want and the users will be spread 
                  equally across variants. 
               </p>
               <p>
                  Your task is to locate the feature toggle named <span className="black"> demoApp.step4</span> and play with the variants.
               </p>

               <h4>
                  <span className="black">demoApp.step4</span> got variant <span className="green">{toggle}</span>  for userId {userId}
               </h4>
            </div>
         </div>
      </section>
    );
  }
}

export default Gradual;
