import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }
  //[".profile-pic", ".contact-details", ".main-col"]
  componentDidMount() {
    this.getResumeData();
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("section").forEach((element) => {
      gsap.from(element.childNodes, {
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play none none none",
        },
        duration: 1,
        y: 300,
        opacity: 0,
      });
    });
  }

  /*   componentDidMount() {
    this.getResumeData();
  } */

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Resume data={this.state.resumeData.resume} />
        {this.state.resumeData.testimonials && (
          <Testimonials data={this.state.resumeData.testimonials} />
        )}
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
