import React from 'react';

import Emojis from './Emojis';

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                <h2>lists emojis</h2>
                <Emojis data={this.props.data}/>
            </div>
        );
    }
}

export default EmojiList;