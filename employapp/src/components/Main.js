import React, { Component } from 'react';
import api from "../util/API";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              </tbody>
          </table>    
        );
    }
}

export default Main;

