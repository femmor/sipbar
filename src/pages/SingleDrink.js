import React, { useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleDrink = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [drink, setDrink] = useState(null)

  const getDrink = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()

      if (data.drinks) {
        const {
          strDrink: name, 
          strDrinkThumb: image, 
          strAlcoholic: info, 
          strGlass: glass, 
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]

        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
        const newDrink = { name, image, info, glass, category, instructions, ingredients }
        setDrink(newDrink)
      } else {
        setDrink(null)
      }
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    getDrink()
  }, [id, getDrink])

  if (loading) {
    return (
      <Loader />
    )
  }

  if (!drink) {
    return (
      <h2 className="section-title"> 
        no cocktail to display
      </h2>
    )
  }

  const {name, image, info, glass, category, instructions, ingredients} = drink

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return(
                ingredient ? <span key={index}>{ingredient}</span> : null
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleDrink
