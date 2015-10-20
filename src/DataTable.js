import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'; // eslint-disable-line
import 'bootstrap';
import 'datatables';
import 'datatables-tabletools';
import 'datatables-colreorder';
import 'datatables-scroller';
import 'datatables-bootstrap';

import language from './locale';

$.fn.dataTable.ext.errMode = function handleError(e, settings, techNote, message) { // eslint-disable-line
  console.error(arguments);
};

class Datatable extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    columns: React.PropTypes.array,
    order: React.PropTypes.array,
    dataSource: React.PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const options = Object.assign({
      language: language,          // 国际化语言设置
      ajax: this.props.dataSource,
    }, this.props);
    $(this.getTableDomNode()).DataTable(options); // eslint-disable-line new-cap
  }

  componentWillUnmount() {
    const table = $(this.getTableDomNode()).DataTable(); // eslint-disable-line new-cap
    table.destroy();
  }

  getTableDomNode() {
    return ReactDOM.findDOMNode(this);
  }

  render() {
    const {columns, data, ajax, children} = this.props;

    if (!columns && !data && !ajax && children) {
      return children;
    }

    return (
      <table className="table table-striped table-hover">
        {this.props.children}
      </table>
    );
  }
}

export default Datatable;
