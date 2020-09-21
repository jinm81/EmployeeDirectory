import React, { Component } from "react";
import api from "../util/API";
import sort from "../components/sort";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    api.search().then((result) => {
      console.log(result.data.results);
      this.setState({ employees: result.data.results }, () =>
        console.log(this.state)
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees
            .filter(
              (employee) =>
                `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`.search(
                  this.props.search.toLowerCase()
                ) !== -1
            )
            .map((employee, i) => (
              <tr key={i}>
                <th scope="row">
                  <img src={employee.picture.thumbnail}></img>
                </th>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Main;
