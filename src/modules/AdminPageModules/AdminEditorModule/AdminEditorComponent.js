import React, { Component } from "react";
import CreateEditor from "./CreateEditor";
import EditorTable from "./EditorTable";

export class AdminEditorComponent extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center text-white mb-5 display-3">EDITOR</h3>
        <div className="row">
          <div className="col-lg-4">
            <CreateEditor />
          </div>
          <div className="col-lg-8">
            <EditorTable />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminEditorComponent;
