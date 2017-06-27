import React from 'react';

import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                <h2>Lists emojis</h2>
                {this.props.emojis.map(function (emoji) {
                    return (
                        <Emoji symbol={emoji.symbol} title={emoji.title} />
                    );
                })}
            </div>
        );
    }
}

export default EmojiList;