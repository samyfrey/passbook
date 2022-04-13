import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsTable from '../Table/NewsTable'
import { Spinner } from 'react-bootstrap'

const NewsFeed = () => {
  const [news, setNews] = useState([])
  // const [title, setTitle] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=bloomberg&pageSize=10&apiKey=cc12a9a486d746b590e2849b48b94bb1')
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

  // const headers = [
  //   'Headline', 'Published'
  // ]

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
  console.log('titleData is', titleData)
  console.log('publishData is', publishedData)

  dataFormatting(news)
  // const titleData = []
  // const titleExtractor = news.map(article => {
  //   return article.title
  // })
  // titleData.push(titleExtractor)
  const dataChart = [
    {
      id: 1,
      header: 'Headline',
      row: titleData
    },
    {
      id: 2,
      header: 'Published',
      row: publishedData
    }

  ]

  console.log('publishedData is', publishedData)

  console.log('datachart row is', dataChart[0].row)
  // function headlinesExtractor (array) {
  //   const titleData = array.title
  //   const data = []
  //   data.push(titleData)
  // }

  return (
    <>
      <NewsTable data={news}/>
      {/* {news.map(article => (
        <ul key={article.id}>

          <h3>{article.publishedAt}</h3>
        </ul>
      )

      )} */}

    </>
  )
}

export default NewsFeed
