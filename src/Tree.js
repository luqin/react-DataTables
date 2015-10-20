import React from 'react';


class Tree extends React.Component {

  static propTypes = {
    prefixCls: React.PropTypes.string,

    multiple: React.PropTypes.bool,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="jstree jstree-default">
        <ul className="jstree-container-ul jstree-children" role="group">
          <li role="treeitem" aria-selected="false" aria-level={1} aria-labelledby="j7_1_anchor" id="j7_1"
              className="jstree-node  jstree-leaf">
            <i className="jstree-icon jstree-ocl" role="presentation"/><a
            className="jstree-anchor  jstree-disabled" href="#" tabIndex={-1} id="j7_1_anchor"><i
            className="jstree-icon jstree-themeicon" role="presentation"/>Node 1</a></li>
          <li role="treeitem" aria-selected="false" aria-level={1} aria-labelledby="j7_2_anchor" aria-expanded="true"
              id="j7_2" className="jstree-node jstree-loading  jstree-last jstree-open" aria-busy="false"><i
            className="jstree-icon jstree-ocl" role="presentation"/><a className="jstree-anchor" href="#" tabIndex={-1}
                                                                       id="j7_2_anchor"><i
            className="jstree-icon jstree-themeicon" role="presentation"/>Node 2</a>
            <ul role="group" className="jstree-children" style={{}}>
              <li role="treeitem" aria-selected="false" aria-level={2} aria-labelledby="j7_3_anchor" id="j7_3"
                  className="jstree-node  jstree-leaf"><i className="jstree-icon jstree-ocl" role="presentation"/><a
                className="jstree-anchor" href="#" tabIndex={-1} id="j7_3_anchor"><i
                className="jstree-icon jstree-themeicon" role="presentation"/>Node 1</a></li>
              <li role="treeitem" aria-selected="false" aria-level={2} aria-labelledby="j7_4_anchor"
                  aria-expanded="true" id="j7_4" className="jstree-node  jstree-last jstree-open" aria-busy="false"><i
                className="jstree-icon jstree-ocl" role="presentation"/><a className="jstree-anchor" href="#"
                                                                           tabIndex={-1} id="j7_4_anchor"><i
                className="jstree-icon jstree-themeicon" role="presentation"/>Node 2</a>
                <ul role="group" className="jstree-children" style={{}}>
                  <li role="treeitem" aria-selected="false" aria-level={3} aria-labelledby="j7_5_anchor" id="j7_5"
                      className="jstree-node  jstree-leaf"><i className="jstree-icon jstree-ocl" role="presentation"/><a
                    className="jstree-anchor" href="#" tabIndex={-1} id="j7_5_anchor"><i
                    className="jstree-icon jstree-themeicon" role="presentation"/>Node 1</a></li>
                  <li role="treeitem" aria-selected="false" aria-level={3} aria-labelledby="j7_6_anchor"
                      aria-expanded="false" id="j7_6" className="jstree-node  jstree-closed jstree-last"><i
                    className="jstree-icon jstree-ocl" role="presentation"/><a className="jstree-anchor" href="#"
                                                                               tabIndex={-1} id="j7_6_anchor"><i
                    className="jstree-icon jstree-themeicon" role="presentation"/>Node 2</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tree;
