import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ModalWindowContainer from "./ModalWindowContainer/ModalWindowContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

 handleModal = () => { 
}

  render() {
    return (
      <div>
        <Button onClick={this.handleModal} content="open" />
        <ModalWindowContainer />
        {/* {this.state.showPopup ? (
          <ModalWindowContainer
            close={this.handleModalWindow}
            open={this.state.showPopup}
          />
        ) : null}
         */}
      </div>
    );
  }
}

export default App;
