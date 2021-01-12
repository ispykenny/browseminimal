import React, { useState, useEffect } from 'react';
import Inner from '../Components/Inner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import createSlug from '../Utils/slug';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import cleanDate from '../Utils/cleanDate'
const Article = (props) => {
  const [hasArticles, setHasArticles ] = useState(null);
  const [currentArticle, setCurrentArticle] = useState();
  
  useEffect(() => {
    window.scrollTo(0,0);
    if(typeof props.read === "object") {
      let count = 0;
      props.read.data.items.forEach((article) => {
        if(createSlug(article.fields.title) === props.article.match.params.slug) {
          count++
          setCurrentArticle(article)
        }
        if(count >= 1) {
          setHasArticles(true)
        } else {
          setHasArticles(false)
        }
      })
    }
  },[props])

  let options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div>
            <img src={`http:${node.data.target.fields.file.url}`} alt='Preview of the product' />
          </div>
        )
      }
    }
  }

  const Article = ({hasArticles}) => {
    if(hasArticles === null) {
      return (
        <div>
          Loading...
        </div>
      )
    } else if(hasArticles === false) {
      return (
        <div>
          <h1>Article not found</h1>
        </div>
      )
    } else if(hasArticles === true) {
      return (
        <div className="article">
          <HelmetProvider>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Browse Minimal - {currentArticle.fields.title}</title>
              <link rel="canonical" href="https://browseminimal.com" />
              <meta name="description" content={currentArticle.fields.seoMeta} />
            </Helmet>
          </HelmetProvider>
          <img src={currentArticle.fields.featuredImage.fields.file.url} alt={`preview of ${currentArticle.fields.title}`}/>
          <p className="date-posted">Posted on: {cleanDate(currentArticle.sys.createdAt)}</p>
          <h1>{currentArticle.fields.title}</h1>
          {documentToReactComponents(currentArticle.fields.article, options)}
        </div>
      )
    }
  }



  
  return (
    <div>
      <Inner className="inner-most"> 
        <Article hasArticles={hasArticles}/>
      </Inner>
    </div>
  )
  
}

export default Article;