import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Enable from './Components/Enable';
import UserWithId from './Components/UserWithId';
import Variants from './Components/Variants';
import Gradual from './Components/Gradual';
import Contact from './Components/Contact';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      toggles: {}
    };

    this.setToggles();
    props.unleash.on('update', () => this.setToggles());

    ReactGA.initialize('');
    ReactGA.pageview(window.location.pathname);

  }

  setToggles() {
    const toggles = {
      step1: this.props.unleash.isEnabled('demoApp.step1'),
      step2: this.props.unleash.isEnabled('demoApp.step2'),
      step3: this.props.unleash.isEnabled('demoApp.step3'),
      readyToOrder: this.props.unleash.isEnabled('demoApp.readyToOrder'),
      step4: this.props.unleash.getVariant('demoApp.step4').enabled,
      step4Variant: this.props.unleash.getVariant('demoApp.step4').name
    }
    this.setState({toggles});
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <Enable toggles={this.state.toggles} />
        <UserWithId toggles={this.state.toggles} userId={this.props.userId} />
        <Gradual toggles={this.state.toggles} userId={this.props.userId} />
        <Variants toggles={this.state.toggles} userId={this.props.userId} />
        <Contact toggles={this.state.toggles} userId={this.props.userId} />
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
