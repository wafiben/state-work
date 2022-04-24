import React, { Component } from 'react';

class Home extends Component {
    componentWillUnmount(){
    console.log('this component is removed from th edom')
    }



    render() {
        return (
            <div>
                <h1>home</h1>
            </div>
        );
    }
}

export default Home;