var React = require('react');
var ReactDOM = require('react-dom');
import dataTables from './jquery.dataTables';
import language from './datatables_locale_zh-CN';

var Datatables = React.createClass({

    /**
     * 组装生成这个组件的 HTML 结构（使用原生 HTML 标签或者子组件），
     * 也可以返回 null 或者 false，这时候 React 会将组件生成一个 <noscript> 标签，
     * 并且 this.getDOMNode() 会返回 null
     */
    render: function () {
        let columns = this.props.columns;
        return (
            <table ref="table" className="table table-striped table-hover">
                <thead>
                    <tr>
                        {columns.map(this.renderColumns)}
                    </tr>
                </thead>
            </table>
        );
    },


    /**
     * 只会在装载之前调用一次，在 render 之前调用，
     * 你可以在这个方法里面调用 setState 改变状态，
     * 并且不会导致额外调用一次 render
     */
    componentWillMount: function () {

    },

    /**
     * 只会在装载完成之后调用一次，在 render 之后调用，
     * 从这里开始可以通过 this.getDOMNode() 获取到组件的 DOM 节点。
     */
    componentDidMount: function () {
        var self = this;
        var oTable = $(ReactDOM.findDOMNode(this.refs.table)
        ).DataTable(
            {
                language: language,          //国际化语言设置
                serverSide: true,            //开启服务器模式
                processing: true,            //显示加载信息
                pageLength: 10,              //更改初始页面长度 （每页的行数）
                //displayStart: 2,              //初始分页起始点
                autoWidth: true,             //让Datatables自动计算宽度
                dom: "<'row'<'col-md-6 col-sm-12'><'col-md-6 col-sm-12'>><'table-scrollable't><'row'<'col-md-5 col-sm-12'li><'col-md-7 col-sm-12'p>>",
                lengthMenu: [                //页面显示数据条数选项
                    [10, 25, 50, 100],
                    [10, 25, 50, 100]
                ],
                order: [                    //表格初始化排序
                    this.props.order
                ],
                columns: self.props.columns,
                ajax: this.props.ajax
            });
    },

    /**
     * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
     * 用此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。
     * 老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染。
     */
    componentWillReceiveProps: function () {

    },

    /**
     * 在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。
     * 使用该方法做一些更新之前的准备工作。
     */
    componentWillUpdate: function () {
    },

    /**
     * 在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
     * 使用该方法可以在组件更新之后操作 DOM 元素。
     */
    componentDidUpdate: function () {
    },

    /**
     *  卸载（删除）组件
     */
    componentWillUnmount: function () {
        var table = $(ReactDOM.findDOMNode(this.refs.table)).DataTable();
        table.destroy();
    },

    renderColumns: function (item) {
        if (!!item) {
            return (<th>{item.label}</th>);
        }
    }
});
module.exports = Datatables;
