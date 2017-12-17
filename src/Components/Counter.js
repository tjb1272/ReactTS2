// import React, { Component } from 'react'
// import PropTypes from 'prop-types'


// class Counter extends Component {
//     constructor() {
//         super();
//         this.state = { count: 0 };
//         this.incrementCounter = this.updateCounter.bind(this, 1);
//         this.decrementCounter = this.updateCounter.bind(this, -1);
//         this.increment5Counter = this.updateCounter.bind(this, 5);
//         this.decrement5Counter = this.updateCounter.bind(this, -5);
//         this.increment10Counter = this.updateCounter.bind(this, 10);
//         this.decrement10Counter = this.updateCounter.bind(this, -10);
//         this.reset = this.updateCounter.bind(this, this.state);
//     }

//     static propTypes = {
//         value: PropTypes.number.isRequired,
//         onIncrement: PropTypes.func.isRequired,
//         onDecrement: PropTypes.func.isRequired,
//         onReset: PropTypes.func.isRequired,
//         onIncrement5: PropTypes.func.isRequired,
//         onDecrement5: PropTypes.func.isRequired,
//         onIncrement10: PropTypes.func.isRequired,
//         onDecrement10: PropTypes.func.isRequired
//       }

//     updateCounter(count) {
//         this.setState({count: this.state.count + count});
//     }     


// Counts = () => {      
//     return (
//         <div className='Counter'>
//             <h3>By the Count of One</h3>
//                 {' '}
//                 <input type='button' value=' + 1 ' onClick={ this.incrementCounter } />
//                 <input type='button' value=' - 1 ' onClick={ this.decrementCounter } />
//                 <p></p>
//             <h3>By the Count of Five</h3>
//                 {' '}
//                 <input type='button' value=' + 5 ' onClick={ this.increment5Counter } />
//                 <input type='button' value=' - 5 ' onClick={ this.decrement5Counter } />
//                 <p></p>
//             <h3>By the Count of Ten</h3>
//                 {' '}
//                 <input type='button' value='+ 10' onClick={ this.increment10Counter } />
//                 <input type='button' value='- 10' onClick={ this.decrement10Counter } />
//                 {' '}
//                 <input type='button' value='+ 10' onClick={ this.reset } />
//                 {' '}
//             <h3>Clicked: {this.state.count} Times</h3>  
//         </div>
//     );
// };


// render() {
//     return (
//         <div>
//             <Counter counter={this.state.counter} /> 
//         </div>
//         );
//     }
// }

export default Counter;