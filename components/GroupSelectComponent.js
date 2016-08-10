var React = require('react');
var GroupSelectComponent = React.createClass({
    displayName: 'GroupSelectComponent',
    getInitialState: function() {
        return {data: [
            {name: "xiaoqiu", value: 0},
            {name: "linfeiyang", value: 1},
            {name: "guest", value: 2}
        ]};
    },
    componentDidMount: function() {
        console.log("init GroupSelectComponent");
    },
    render: function(){
        var data = this.state.data;
        return (<div>
            {data.map((item) => {
                return <span key={item.value}><input type="radio" name="groupSelect"  value={item.value}/>{item.name}</span>
            })}
        </div>);
    }

});
module.exports = GroupSelectComponent;
