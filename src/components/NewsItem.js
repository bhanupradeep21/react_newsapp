import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url, author, publishedAt,source } = this.props;
    let dateString = new Date(publishedAt).toGMTString();

    return (
      <div>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{top:"-1%",left:"-5%",zIndex:"1"}}>
    {source}</span>
            <img src={imgurl} className="card-img-top" alt="can't load img" />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p style={{color:"green",fontSize:"15px"}}>
                  {" "}
                  --By {!author ? "UnKnown" : author} on {dateString}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
