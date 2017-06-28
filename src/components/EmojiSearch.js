import React from 'react';
import PropTypes from 'prop-types';

class EmojiSearch extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h2>Emoji Search</h2>
                <input onChange={this.handleSubmit} type="text"/>
            </div>
        );
    }
    handleSubmit(event) {
        const searchStr = event.target.value;
   //     console.dir(event.target);
        this.props.filterEmojis(searchStr);
    }
}

export default EmojiSearch;