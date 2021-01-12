import React from 'react';
import Inner from '../Components/Inner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom';
import createSlug from '../Utils/slug';
import cleanDate from '../Utils/cleanDate';

const Blogs = ({setArticles, articles, mounted}) => {

  const Article = () => {
    if(mounted) {
      return (
        articles.data.items.map((article , index) => (
          <div className="article__item" key={index}>
            <Link to={`articles/${createSlug(article.fields.title)}`} key={index}>
              <img src={article.fields.featuredImage.fields.file.url} alt={`preview of ${article.fields.title}`}/>
              <p className="date-posted">Posted on: {cleanDate(article.sys.createdAt)}</p>
              <h1>{article.fields.title}</h1>
              {documentToReactComponents(article.fields.excerpt)}

              <button>Read Article</button>
            </Link>
            <hr/>
          </div>
        ))
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }

  return (
    <Inner className="inner-most article">
      <Article/>
    </Inner>
  )
}

export default Blogs;