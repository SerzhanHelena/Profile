import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ModalWindowContainer from "./ModalWindowContainer/ModalWindowContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  handleModalWindow = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div>
        <Button  onClick={this.handleModalWindow} content="open" />
        {this.state.showPopup ? (
          <ModalWindowContainer
            close={this.handleModalWindow}
            open={this.state.showPopup}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
