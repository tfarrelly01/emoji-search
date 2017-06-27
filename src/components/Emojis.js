import React from 'react';

class Emojis extends React.Component {
  
    render() {
        return (
            <div>
                <h2>here are all my emojis</h2>
                {this.props.data.map((x)=>{
                        console.log(x);
                    })}
                </div>
        );
    }
}

  

export default Emojis;