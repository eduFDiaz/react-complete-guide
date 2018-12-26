import React, { Component } from "react";
import Loader from 'react-loader-spinner';

export default class myLoader extends React.Component {
  render() {
    return (
      <div>
        <Loader type="CreddleLoader" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }
}
