import Search from './../components/search/Search'
import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor(){
        super()
        
        this.state = {
          topic: '',
          start: '',
          end: '',
          key: 'e80d2a443a884de39f5a65f217ff0f12',
          articles: []
        }
      }
    
      setSearch = (event) => {
        this.setState({ [event.target.name]:event.target.value })
      }
    
      renderArticles = () => {
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.topic}&api-key=e80d2a443a884de39f5a65f217ff0f12`)
            .then(data => {
                console.log(data.data.response.docs)
                this.setState({ articles:data.data.response.docs})
            })
            .catch(err => console.log(err))
      }

      render(){
          return(
              <Search set={this.setSearch} update={this.renderArticles} state={this.state}/>
          )
      }
}

export default Home