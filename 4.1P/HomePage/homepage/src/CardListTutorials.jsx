import React from 'react'
import Card from './card'
import tutorials from './tutorialList'

const CardListTutorials = () => 
    {
       
       
      return <div class="row">
        {tutorials.map( (tutorials) =>
         <card>
        {tutorials.key}
        {tutorials.image}
        {tutorials.title}
        {tutorials.text}
        </card>
        
    )}
    </div>
    }   
export default CardListTutorials;