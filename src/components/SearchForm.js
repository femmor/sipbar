import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const searchValueChange = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail drinks</label>
          <input type="text" id="name" ref={searchValue} onChange={searchValueChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
