import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'
import data from "./data.js"

export default function App(){

  const cards = data.map(item => {
    return(
      <Card 
        key={item.id}
        {...item}
      />
    )
  })



  return(
    <>
      <Nav />
      <section>
        {cards}
      </section>
    </>
  )
}
