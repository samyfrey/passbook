import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsTable from '../Table/NewsTable'
import { Spinner } from 'react-bootstrap'

const NewsFeed = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bloomberg&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      setNews(res.data.articles)
    }

    fetchNews()
  }, [])

  if (!news) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      <NewsTable data={news}/>

    </>
  )
}

export default NewsFeed
