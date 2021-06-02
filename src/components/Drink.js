import React from 'react'
import { Link } from 'react-router-dom'

const Drink = ({ id, name, image, glass, info }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/drink/${id}`} className="btn btn-primary btn-details">
          more details
        </Link>
      </div>
    </article>
  )
}

export default Drink
