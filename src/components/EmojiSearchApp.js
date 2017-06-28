import React from 'react';
import PropTypes from 'prop-types';

import EmojiList from './EmojiList';
import EmojiSearch from './EmojiSearch';

class EmojiSearchApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            emojis:  this.props.emojis,
            searchTerm: ''
        };
        this.filterEmojis = this.filterEmojis.bind(this);
    }
    render () {
        return (
            <div>
                <h1>Emoji Search App</h1>
                <EmojiSearch searchTerm={this.state.searchTerm} filterEmojis={this.filterEmojis}/>
                <EmojiList emojis={this.state.emojis}/>
            </div>
        );
    }
    filterEmojis(searchStr) {
        let regExp = new RegExp(searchStr, 'gi');
        const results = this.props.emojis.filter((emoji) => {
             return emoji.title.match(regExp) || emoji.keywords.match(regExp);
        });
        this.setState({
            emojis: results,
            searchTerm: searchStr
        });
    }
}

EmojiSearchApp.propTypes = {
    emojis: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default EmojiSearchApp;