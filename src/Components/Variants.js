import React, { Component } from 'react';

class Gradual extends Component {
  render() {

   const toggle = this.props.toggles.step4;
   const variant = this.props.toggles.step4Variant;
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
                  When we want to test multiple variants of a feature a standard feature toggle returning true/false is simply not enough. In Unleash you 
                  can define <span className="black"> Variants </span> for a feature toggle. You will then  get a variant object back if the toggle is enabled. 
               </p>
               <p>
                  Your task is to locate the feature toggle named <span className="black"> demoApp.step4</span> and play with the variants. Remember that the same user will be 
                  assigned the same variant, as long as you don't change the number of variants. 
               </p>
               <h4>
                  <span className="black">demoApp.step4</span> is {toggle ? <span className="green"> enabled</span>: <span className="red">disabled</span>} for userId {userId}
               </h4>

               {toggle? <div>Variant select for userId {userId}:<br /> <span className="box" style={{backgroundColor: variant}}>{variant}</span></div> : null }
               

            </div>
         </div>
      </section>
    );
  }
}

export default Gradual;
