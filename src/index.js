import React from 'react';
import ReactDOM from 'react-dom';
import emojiData from './emojiList.json';

import EmojiSearchApp from './components/EmojiSearchApp.js';

ReactDOM.render(<EmojiSearchApp emojis={emojiData}/>, 
document.getElementById('root'));
