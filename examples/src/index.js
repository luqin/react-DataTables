import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import TreeDemo from './app/TreeDemo';

class Example extends React.Component {

  render() {
    return (
      <div>
        <TreeDemo/>
      </div>
    );
  }

}

ReactDOM.render(<Example/>, document.querySelector('#app'));
