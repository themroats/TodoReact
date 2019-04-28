import * as React from "react";

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/><button onClick={() => this.props.onSubmit("Test Task")}>Submit</button>
      </div>
    );
  }
}


export default InputLine;