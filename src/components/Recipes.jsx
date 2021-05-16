import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Row, Container, Table } from 'react-bootstrap'
import styles from '../styles/styles.module.css'

const Recipes = ({ recipes }) => {
  return (
    <Container>
      <Row>
        <Table striped bordered hover className={styles.fontSriracha}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Calorie</th>
              <th>Image</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={uuidv4()}>
                <td key={uuidv4()} className={styles.tr}>{recipe.recipe.label}</td>
                <td key={uuidv4()} className={styles.tr}>{recipe.recipe.calories}</td>
                <td key={uuidv4()} className={styles.tr}>
                  <img key={uuidv4()} src={recipe.recipe.image} alt={recipe.recipe.label} />
                </td>
                <td className={styles.tr}>
                  {recipe.recipe.ingredients.map((ingredient) => (
                    <li key={uuidv4()}>{ingredient.text}</li>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Recipes
