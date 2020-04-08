import React, { Component } from "react";

export default class Foto extends Component {
  render() {
    const user = this.props.user[0];
    console.log("passing data", user);
    return (
      <div>
        <img
          style={{ heigth: 300, width: 300 }}
          src={user && user.owner.avatar_url}
        ></img>
        <h5 style={{ marginTop: 5 }}>{user && user.owner.login}</h5>
      </div>
    );
  }
}
