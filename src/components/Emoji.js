import React from 'react';

class Emoji extends React.Component {
  
    render() {
        return (
            <p>
                {this.props.symbol}
                {this.props.title}
            </p>
        );
    }
}

export default Emoji;