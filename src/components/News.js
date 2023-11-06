import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false
    }
  }
  async componentDidMount(){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=39674f5c32724f34b8a961b6e275aaf8"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>News4You Breaking News</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
            <NewsItem  title = {element.title?element.title.slice(0, 40):""} description = {element.description?element.description.slice(0, 85):""} imageUrl = {element.urlToImage?element.urlToImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Flinktr.ee%2Fnews4you.in&psig=AOvVaw0a_CzS69IRoN2fqGsIH713&ust=1699349342234000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIicyeGHr4IDFQAAAAAdAAAAABAJ"} newsUrl = {element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
