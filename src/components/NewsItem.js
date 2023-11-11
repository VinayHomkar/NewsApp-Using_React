import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div class="source">
            <span className="badge rounded-pill bg-danger source">
              {source}
            </span>
          </div>
          <img src={imageUrl} class="card-img-top" alt="News4You" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Updated {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
