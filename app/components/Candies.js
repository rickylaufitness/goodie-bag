import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCandiesThunk } from "../store";

class Candies extends Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    const { candies } = this.props;
    console.log(this.props);
    return (
      <div id="candies">
        {candies.map(candy => (
          <div className="candy" key={candy.id}>
            <h3>{candy.name}</h3>
            <p>{candy.description}</p>
            <img src={candy.imageUrl} />
            <h5>{candy.quantity}</h5>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candies
});

const mapDispatch = dispatch => ({
  getCandies: () => dispatch(getAllCandiesThunk())
});

export default connect(
  mapState,
  mapDispatch
)(Candies);
