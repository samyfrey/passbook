import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListTableTemp from '../Table/ListTableTemp'
import { Spinner } from 'react-bootstrap'

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cc12a9a486d746b590e2849b48b94bb1')
      console.log(res)
      setNews(res.data.articles)
    }

    fetchNews()
  }, [])
  console.log('news state is', news)

  if (!news) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  const header = [
    'Headline', 'Published'
  ]
  const newsData = [{
    id: 1,
    header: 'Headline',
    row: 'title'
  },
  {
    id: 2,
    header: 'Published',
    row: 'publishedAt'
  }]

  console.log('newsData var is', newsData)
  return (
    <>
      <ListTableTemp data={header} news={news}/>
      {news.map(article => (
        <ul key={article.id}>

          <h3>{article.publishedAt}</h3>
        </ul>
      )

      )}

    </>
  )
}

export default News
