import ItemList from './components/ItemList'
import items from './data/items'

function App() {
  return (
    <main>
      <h1>Homework 1</h1>
      <ItemList items={items} />
    </main>
  )
}

export default App
