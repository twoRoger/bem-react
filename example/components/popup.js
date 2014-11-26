var react = require('react'),
    BemMixin = require('../../lib/bemMixin');

module.exports = react.createClass({
    mixins : [BemMixin],

    renderToBemJson : function() {
        return {
            block : 'popup',
            mods : {
                visible : this.props.visible
            },
            tag : 'div',
            onClick : this._onClick,
            children : this.props.children
        };
    }
});
