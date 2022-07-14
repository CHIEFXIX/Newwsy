import React, { Component } from 'react'

export class NewsCard extends Component {
  render() {
     let {title,description,imageUrl,newsurl,author,date} = this.props;
    return (
        <div className="card mb-3" style={{width: "60vw", margin:"auto"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{!title?"No title" :title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
              <a href={newsurl} target="_blank"rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsCard