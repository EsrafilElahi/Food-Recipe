import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
import '../styles/App.css'

import { Container, Alert, Button, Form } from 'react-bootstrap'

const Header = () => {
  const APP_ID = 'deee8235'
  const APP_KEY = 'a120c60d67ebdf17671fe19f0dc04ef0'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {

    const getRecipes = async () => {
      try {
        const req = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
        )
        const res = await req.json()
        const data = res.hits
        setRecipes(data)
      } catch (err) {
        console.log(err)
      }
    }

    getRecipes()
  }, [query])


  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <Container className='App'>

      <h1 className='header'>
        <Alert variant='info'>Search Food Recipes</Alert>
      </h1>

      <Form inline className='my-5' onSubmit={handleSubmit}>
        <Form.Row className='mx-auto'>
          <Form.Control type='text' value={search} onChange={handleSearch} />
          <Button className='font-bad-script' type='submit' variant='info'>
            Search
          </Button>
        </Form.Row>
      </Form>

      <hr className='hr' />
      <Recipes recipes={recipes} />

    </Container>
  )
}

export default Header
