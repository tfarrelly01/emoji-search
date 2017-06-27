import React from 'react';

class EmojiSearch extends React.Component {
    render() {
        return (
            <div>
            <h2>Emoji Search Form</h2>
                <input type="text" onChange ={this.handleChange}/>
            </div>
        );
    }
    handleChange(event) {
        console.dir(event.target);
    }
}

export default EmojiSearch;