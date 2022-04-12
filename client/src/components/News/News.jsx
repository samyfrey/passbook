import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
  return (
    <>
      {news.map(article => (
        <ul key={article.id}>

          <h3>{article.title}</h3>
        </ul>
      )

      )}

    </>
  )
}

export default News
