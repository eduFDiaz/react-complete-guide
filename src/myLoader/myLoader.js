import React, { Component } from "react";
import Loader from 'react-loader-spinner';

export default class MyLoader extends Component {
  render() {
    return (
      <div>
        <Loader type="CradleLoader" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }
}
