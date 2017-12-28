import React, { Component } from 'react'
     
class Search extends Component {
  state={ repos: [] }
     
    getRepos = (searchValue) => {
        console.log(searchValue);
        console.log('im alive');
      let url = `https://api.github.com/search/repositories?q=${searchValue}&language=javascript`
      console.log(url)
        fetch(url).then((response) => {
          return response.json();
        }).then((results) => {
          if(results.items !== undefined){
            console.log(results.items)
            let items = results.items
            this.setState({ repos: items })
            }
          });
        }


    render () {
        return (
          <div>
             <input
             id='username'
             placeholder='github username'
             value={ this.state.username }
             type='text'
           />
           {' '}
           <button
             className='button'
             onClick={ this.getRepos }
           >
             Submit
           </button>
             {' '}

<h2>Repositories:</h2>
<table>
  <tbody>
    <tr>
      <th>Repo Id</th>
      <th>Repo Name</th>
      <th>Repo URL</th>
    </tr>
      {this.state.repos.map(function(repos) {
        return (
          <tr>
            <td >{ repos.id }</td>
            <td >{ repos.name }</td>
            <td >{ repos.html_url }</td>
          </tr>)
        })}
      </tbody>
    </table>
  </div>
  )} 
};
    
export default Search;



