import React from 'react';

import EmojiList from './EmojiList';
import EmojiSearch from './EmojiSearch';


class EmojiSearchApp extends React.Component {
    render () {
        return (
            <div>
        <h1>Emoji Search App</h1>
            <EmojiSearch/>
            <EmojiList/>
            </div>
        );
    }
}

export default EmojiSearchApp;