import React, { Component } from 'react';
import Tab from './common/Tab/Tab'


class App extends Component {
  render() {
    return (
        <div>
            {this.props.children}
            <Tab></Tab>
        </div>

      // <div className="App">
      //     {this.props.children}
      //
      // </div>
    );
  }
}

export default App;
