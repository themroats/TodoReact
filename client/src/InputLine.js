import * as React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typedText: ""};
  }
  handleTyping(event) {
    this.setState({typedText: event.target.value})
  }
  handleSubmit() {
    this.props.onSubmit(this.state.typedText);
    this.setState({typedText: ""});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.typedText} onChange={(e) => this.handleTyping(e)}/><button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}


export default InputLine;