/**
 * Created by linfeiyang on 16-7-29.
 */
var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('../../components/HelloWorldComponent');
var GroupSelect = require('../../components/GroupSelectComponent');


function start() {
    ReactDom.render(<Hello i="1" name="hello" click={renderGroupSelect}/>, document.getElementById('example'));
}


function renderGroupSelect() {
    ReactDom.render(<GroupSelect  name="groupSelect"/>, document.getElementById('example'));
}

start();