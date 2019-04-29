import * as React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typedText: ""};
    this.handleKey = this.handleKey.bind(this);
  }
  handleTyping(event) {
    this.setState({typedText: event.target.value})
  }
  handleSubmit() {
    this.props.onSubmit(this.state.typedText);
    this.setState({typedText: ""});
  }
  handleKey(e) {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleKey} value={this.state.typedText} onChange={(e) => this.handleTyping(e)}/><button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}


export default InputLine;