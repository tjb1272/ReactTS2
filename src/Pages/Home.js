import React from 'react'
import './Home.jpg'

class Home extends React.Component {

render ()
{
    return (
    <div>
        <h2>Welcome To My Home!</h2>
            <p>
                Check out the different pages of my site.<br /> 
                You can search your repositories or learn to count....Check it Out! 
            </p>
            <img src={require(`./Home.jpg`)} />
    </div>
    );
}
}
export default Home;
