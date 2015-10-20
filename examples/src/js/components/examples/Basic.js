import React from 'react';

import DataTable from 'react-datatables';

class Basic extends React.Component {

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
      <DataTable/>
    );
  }
}

export default Basic;
