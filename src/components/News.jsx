import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';


export default function News({ query, category, pageSize, setProgress}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capatilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    let url = "";
    setProgress(10);
    if (query === "") {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f820359d96a249e29625e1d9a443a503&page=${page}&pageSize=${pageSize}`
    } else {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=f820359d96a249e29625e1d9a443a503&page=${page}&pageSize=${pageSize}`
    }
    setLoading(true)
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  }

  useEffect(() => {
    document.title = `${capatilizeFirstLetter(category)} - NewsWorld`;
    updateNews();
    // eslint-disable-next-line
  }, [query])

  const fetchMoreData = async () => {
    let url = "";
    if (query === "") {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f820359d96a249e29625e1d9a443a503&page=${page}&pageSize=${pageSize}`
    } else {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=f820359d96a249e29625e1d9a443a503&page=${page}&pageSize=${pageSize}`
    }
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

  return (
    <>
      <div className='flex justify-center max-sm:text-center'>
        <h1 className='text-4xl font-semibold my-6 mt-20 max-sm:mt-30'>NewsWorld - Top {capatilizeFirstLetter(category)} Headlines</h1>
      </div>
      <div className='flex justify-center'>
        {loading && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='flex justify-center gap-10 items-center flex-wrap mb-8'>
          {articles.map((element, index) => {
            return <div className="bg-gray-300" key={index}>
              <Newsitems
                title={element.title ? element.title.slice(0, 66) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
              />
            </div>
          })}
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  pageSize: 8,
  category: 'general',
  query: ""
};
News.propTypes = {
  query: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
