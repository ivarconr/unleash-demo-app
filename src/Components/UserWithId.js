import React, { Component } from 'react';

class UserWithId extends Component {
  render() {

    const toggle = this.props.toggles.step2;
    const userId = this.props.userId;

 
    return (
      <section id="userWithId" className="light">
         <div className="row">
            <div className="three columns">
               <i className="fa fa-user large-icon"></i>
            </div>
            <div className="nine columns main-col">
               <h2>Step 2: Enable for a specific user</h2>

               <p>
                  When we have deployed some new code to production it would be nice to enable the new feature for ourselves before we enable it to everyone else. 
                  To achieve this in unleash we use the  <span className="black"> userWithId </span> activation strategy.
               </p>
               <p>
                  Your task is to locate the feature toggle named <span className="black"> demoApp.step2 </span>  and configure the 
                  <span className="black"> userWithId </span> activation strategy to also include your userId wich is <span className="black">{userId}</span>
                  
               </p>
               <h4>
                  <span className="black">demoApp.step2</span> is {toggle ? <span className="green"> enabled</span>: <span className="red">disabled</span>} for userId {userId}
               </h4>
               
            </div>
         </div>
      </section>
    );
  }
}

export default UserWithId;
