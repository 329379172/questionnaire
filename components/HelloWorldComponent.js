/**
 * Created by linfeiyang on 16-8-5.
 */
var React = require('react');
var connect = require('react-redux').connect;
var HelloWorldComponent = React.createClass({
    displayName: 'HelloWorldComponent',
    getInitialState: function() {
        this.i = ~~this.props.i;
        console.log("init HelloWorldComponent");
        return {data: "xiaoqiu"};
    },
    componentDidMount: function() {
        this.setState({data: "linfeiyang"});
    },
    render: function(){
        console.log(this.props);
        const {dispatch} = this.props;
        console.log(dispatch);
        return (<h1 onClick={text => dispatch({ type: 'INCREMENT', count: 2 })}>Hello, world~ {this.state.data}{this.i}</h1>);
    }
});

var select = (state)=> {
    return {
    };
};

module.exports = connect(select)(HelloWorldComponent);