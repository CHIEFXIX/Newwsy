import React, { Component } from "react";
import NewsCard from "./NewsCard";
import PropTypes from 'prop-types' 
export class News extends Component {
  static defaultProps={
      country:'in',
      pageSize:8,
      category: 'general',
      apiKey:process.env.REACT_APP_NEWS_API
  }
  static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }
  constructor() {
    super();
    console.log("This is a constructor of news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNew(){
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults});
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults});
  }
  handlePreviousclick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({page: this.state.page - 1, articles: parsedData.articles });

  };
  handleNextclick = async () => {
    console.log("Next");
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({  page: this.state.page + 1,articles: parsedData.articles })
     }
    }

  render() {
    return (
      <div className="container  my-3 ">
        <div className="text-center"><h2>Top-Headlines</h2></div>
        
        <div className="my-2">
          {this.state.articles.map((element) => {
            return (
              <NewsCard
                key={element.url}
                title={element.title?.slice(0, 100)}
                description={element.description?.slice(0, 150)}
                imageUrl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousclick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;