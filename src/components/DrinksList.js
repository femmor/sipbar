import React from 'react'
import {useGlobalContext} from "../context"
import Loader from './Loader'
import Drink from './Drink'

const DrinksList = () => {
  const {loading, cocktails} = useGlobalContext()
  
  if (loading) {
    return (
      <Loader />
    )
  }

  if (cocktails.length < 1) {
    return (<h2 className="section-title">no cocktail drinks matched your search criteria</h2>)
  }

  return (
    <section className="section">
      <h2 className="section-title">sipbar lounge cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(drink => {
          return (
            <Drink key={drink.id} {...drink}/>
          )
        })}
      </div>
    </section>
  )
}

export default DrinksList
