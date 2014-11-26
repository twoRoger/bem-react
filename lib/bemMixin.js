var react = require('react'),
    bemJsonToReact = require('./bemJsonToReact'),
    buildBemClassName = require('./buildBemClassName');

module.exports = {
    render :function() {
        var json = this.renderToBemJson();

        if(!json) {
            throw Error('render: should return bemjson');
        }

        if(!json.block) {
            throw Error('render: block should be specified in returned bemjson');
        }

        if(typeof json.block !== 'string') {
            throw Error('render: block should be a string');
        }

        json.className = buildBemClassName(json.block, json.mods, this.props.mix);

        return react.createElement(
            json.tag || 'div',
            json,
            bemJsonToReact(json.children, json.block));
    }
};
