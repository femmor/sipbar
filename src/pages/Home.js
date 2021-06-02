import React from 'react'
import DrinksList from '../components/DrinksList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <DrinksList/>
    </main>
  )
}

export default Home
