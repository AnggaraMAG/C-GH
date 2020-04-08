import React, { Component } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import Foto from "./Foto";

export default class Body extends Component {
  state = {
    name: "",
    data: [],
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
    console.log("dkaowdkoakda", e.target.value);
  };

  handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.name}/repos`)
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
  };

  render() {
    const { data } = this.state;
    console.log("dataaaaaa", data);
    return (
      <div style={{ marginTop: 10 }}>
        <Row>
          <Col style={{ margin: "0 0 0 10px" }}>
            <Foto user={data} />
          </Col>
          <Col sm={9}>
            <Form inline>
              <FormControl
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Search Account..."
                className="mr-sm-2"
                onChange={this.handleChange}
              />
              <Button variant="outline-dark" onClick={this.handleSearch}>
                Search
              </Button>
            </Form>
            <hr />
            <Row>
              <Col>
                <h2>List Repository</h2>
                {data.map((index, key) => (
                  <div
                    className="mt-3"
                    key={key}
                    style={{ borderBottom: "1px solid" }}
                  >
                    <a href={index.html_url}>
                      <h5>{index.name}</h5>
                    </a>
                      <p>{index.language}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
