import React, { Component } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Auxilary";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";
// // import Radium from "radium";
// import styled from "styled-components";
// // import "./Person.css";
// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  componentDidMount() {
    //   document.querySelector("input").focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {/* <AuthContext.Consumer> 
          {(context) =>*/}
        {this.context.authenticated ? (
          <p>Authenticated!!</p>
        ) : (
          <p>Please login</p>
        )}

        {/* }</AuthContext.Consumer> */}
        {/* <div className={classes.Person}> */}
        <p key="i1" onClick={this.props.click}>
          my name is {this.props.name} and i'm {this.props.age} years old
        </p>

        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* // </div> */}
      </Aux>
    );
  }
}
// const person = (props) => {
// functional components

// };
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
//^used to check the type nd throws an error
export default withClass(Person, classes.Person);

// export default Radium(person);
