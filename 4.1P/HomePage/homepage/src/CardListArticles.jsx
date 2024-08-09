import React from 'react'
import Card from './card'
import articles from './articleList'


const CardListArticles = () => 
{
   
   
  return <div class="row">
    {articles.map( (articles) =>
         <card>
        {articles.key}
        {articles.image}
        {articles.title}
        {articles.text}
        </card>
        
    )}
    </div>
    }   
export default CardListArticles;



