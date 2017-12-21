import React, { Component } from 'react'
import PropTypes from 'prop-types'
     
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { repos: [] }
  }
     
    getRepos(searchValue) {

      let url = `https://api.github.com/search/repositories?q=${searchValue}&language=javascript`
      console.log(url)
        fetch(url).then( (response) => {
          return response.json();
        }).then((results) => {
          if(results.items != undefined){
            console.log(results.items)
            let items = results.items   
            this.setState({ repos: items })
            }
          });
        
        }

      handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.props.repos);
      }

    render () {
        return (
          <div>
             <form className='text' onSubmit={this.handleSubmit}>
             <input
             id='username'
             placeholder='github username'
             value={this.state.username}
             type='text'
           />
           {' '}
           <button
             className='button'
             type='submit'
           >
             Submit
           </button>
             </form> 
             {' '}
            <ul>
               {this.state.repos.map(i => {
              return <li>{this.state.repos.items}</li>
               })} 
            </ul>
          </div>
        )
      } 
    };
  
    
export default Search;
