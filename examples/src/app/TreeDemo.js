import React from 'react';

import 'jstree/dist/themes/default/style.css';
import ReactJstree from 'react-jstree';

class TreeDemo extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <ReactJstree>MyComponent</ReactJstree>
    );
  }
}

export default TreeDemo;
