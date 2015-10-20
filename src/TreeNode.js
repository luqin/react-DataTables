import React from 'react';


class TreeNode extends React.Component {

  static propTypes = {
    opened: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    icon: React.PropTypes.node,
    prefixCls: React.PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderChildren(props) {
    const children = props.children;

    if (!children) {
      return children;
    }

    let newChildren = children;

    return children;
  }

  render() {
    const props = this.props;

    let newChildren = this.renderChildren(props);

    return (
      <div>MyComponent</div>
    );
  }
}

export default TreeNode;
