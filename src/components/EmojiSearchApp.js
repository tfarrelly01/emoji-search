import React from 'react';

import EmojiList from './EmojiList';
import EmojiSearch from './EmojiSearch';
import emojiData from '../emojiList.json';


class EmojiSearchApp extends React.Component {
    render () {
        return (
            <div>
        <h1>Emoji Search App</h1>
            <EmojiSearch/>
            <EmojiList data={emojiData}/>
            </div>
        );
    }
}

export default EmojiSearchApp;