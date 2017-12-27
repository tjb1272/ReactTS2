import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.incrementCounter = this.updateCounter.bind(this, 1);
        this.decrementCounter = this.updateCounter.bind(this, -1);
        this.increment5Counter = this.updateCounter.bind(this, 5);
        this.decrement5Counter = this.updateCounter.bind(this, -5);
        this.increment10Counter = this.updateCounter.bind(this, 10);
        this.decrement10Counter = this.updateCounter.bind(this, -10);
    }

    updateCounter(count) {
        this.setState({count: this.state.count + count});
    }     

    getCount(){
        this.setState({
            count: this.state.count
        })
    }

    componentWillMount() {
        this.getCount(); 
    }

    componentDidMount() {
        this.getCount();
    }

render () { 
    return (

        <div className='Counter'>
                <h4>Follow Our Count</h4>
            <h3>By the Count of One</h3>
                {' '}
                <input type='button' value=' + 1 ' onClick={ this.incrementCounter } />
                <input type='button' value=' - 1 ' onClick={ this.decrementCounter } />
                <p></p>
            <h3>By the Count of Five</h3>
                {' '}
                <input type='button' value=' + 5 ' onClick={ this.increment5Counter } />
                <input type='button' value=' - 5 ' onClick={ this.decrement5Counter } />
                <p></p>
            <h3>By the Count of Ten</h3>
                {' '}
                <input type='button' value='+ 10' onClick={ this.increment10Counter } />
                <input type='button' value='- 10' onClick={ this.decrement10Counter } />
                {' '}
            <h3>Clicked: {this.state.count} Times</h3>  
        </div>
        );
    }
};

export default Counter;
