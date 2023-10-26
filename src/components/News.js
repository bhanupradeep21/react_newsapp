import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

export default class News extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
    document.title = "Daily News - " + (this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)
  }

  static defaultProps = {
    country:"in",
    pageSize: 8,
    category:"general"
  }

  static propTypes = {
    country:propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:"true"})
        let data =await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false})
  }

  async componentDidMount(){
      this.updateNews();
  }
  handelPreviousClick = async ()=>{
    this.setState({page: this.state.page-1})
    this.updateNews();
    window.scrollTo(0, 0);
  }

  handelNextClick = async ()=>{
          this.setState({page: this.state.page+1})
          this.updateNews();
          window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container my-3'>
        {!(this.state.loading)&&<h1 className="text-center" style={{color:"#bb4ea8",marginTop:"70px"}}>Daily News Top Headlines - {(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} </h1>}

        {(this.state.loading)&&<Spinner/>}

        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}>&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
        <div className="row">
          {!this.state.loading&&this.state.articles.map((element,index)=>{
            return <div className="col md-4" key={index}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OEUUALK2MCEAY3LQWQZIHXZE5A.JPG&w=1440"} url={element.url?element.url:""} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
          </div>
        })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}>&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
      </div>

    )
  }
}
