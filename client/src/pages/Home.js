import Search from './../components/search/Search'
import React from 'react'
import axios from 'axios'
import SearchItems from './../components/searchItems/SearchItems'

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
        console.log(this.state)
      }
    
      renderArticles = () => {
        console.log(this.state.start)
        console.log(this.state.end)
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.topic}&api-key=e80d2a443a884de39f5a65f217ff0f12&begin_date=${this.state.start || 15000202}&end_date=${this.state.end || 30000101}`)
            .then(data => {
                console.log(data.data.response.docs)
                this.setState({ articles:data.data.response.docs })
            })
            .catch(err => console.log(err))
      }

      saveArticle = (title, href, date) => {
        axios
            .post('/api/article', {
                title: title,
                date: date,
                href: href
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
      }

      render(){
          return(
            <div>
                <Search set={this.setSearch} update={this.renderArticles} state={this.state}/>
                {
                    this.state.articles.map(e => {
                       return <SearchItems save={this.saveArticle} buttonT='Add To Favorites' date={e.pub_date} snippet={e.snippet} key={e._id} web_url={e.web_url}/>
                    })
                }
            </div>  
            )
      }
}

export default Home