import { Component } from 'react'

class ItemList extends Component {
  render() {
    const { items } = this.props

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    )
  }
}

export default ItemList
