/**
 * Created by linfeiyang on 16-8-5.
 */
var React = require('react');
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
        return (<h1 onClick={this.props.click}>Hello, world~ {this.state.data}{this.i}</h1>);
    }
});

module.exports = HelloWorldComponent;