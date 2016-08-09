/**
 * Created by linfeiyang on 16-7-29.
 */
var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('../../components/HelloWorldComponent');



ReactDom.render(<Hello i="1" name="hello"/>, document.getElementById('example'));