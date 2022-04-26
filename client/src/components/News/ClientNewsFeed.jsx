import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsTable from '../Table/NewsTable'
import { Spinner } from 'react-bootstrap'

const ClientNewsFeed = ({ borrower }) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get('https://newsapi.org/v2/everything?sources=bloomberg&y&q=' + borrower.name + '&sortBy=popularity&language=en&pageSize=10&apiKey=cc12a9a486d746b590e2849b48b94bb1')
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

  const titleData = []
  const publishedData = []
  function dataFormatting (array) {
    const titleExtractor = news.map(article => {
      return article.title
    })
    titleData.push(titleExtractor)
    const publishExtractor = news.map(article => { return article.publishedAt })
    publishedData.push(publishExtractor)
  }

  dataFormatting(news)

  // }

  return (
    <>
      <NewsTable data={news}/>

    </>
  )
}

export default ClientNewsFeed
