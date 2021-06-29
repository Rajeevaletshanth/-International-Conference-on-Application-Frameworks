import React, { Component } from "react";
import { Table, Card, CardBody } from "reactstrap";

export class AdminTemplatesTable extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Card>
            <CardBody className="p-3">
              <div
                style={{
                  maxHeight: "390px",
                  overflowY: "auto",
                }}
              >
                <Table hover>
                  <thead>
                    <tr>
                      <th>Template Name</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default AdminTemplatesTable;
