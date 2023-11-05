import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Kal-Tak Breaking News</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title = "MyTitle" description = "MyDescription"/>
            </div>
            <div className="col-md-4">
                <NewsItem title = "MyTitle" description = "MyDescription"/>
            </div>
            <div className="col-md-4">
                <NewsItem title = "MyTitle" description = "MyDescription"/>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News
