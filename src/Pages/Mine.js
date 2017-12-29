import React from 'react'
import './me2.jpg'

const mstyle = {
    fontSize: '48px',
};

class Mine extends React.Component {



    render ()
    {
        return (
        <div>
            <h2>Hello There</h2>
            <p style={mstyle}>This page said Mine! Not Yours....</p>
            <p></p>
            <img src={require(`./me2.jpg`)} />
        </div>
        );
    }
    }
    export default Mine;
    
