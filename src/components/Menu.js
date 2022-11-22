import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Receipt from './Receipt'

const menuItems = [
  {
    name: '2 Chili Dogs',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150191/chili-dogs.jpg',
  },
  {
    name: 'Classic Hamburger',
    price: '$5.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150440/hamburger.jpg',
  },
  {
    name: 'Glorified Bacon Cheeseburger',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150499/bacon-cheese.jpg',
  },
  {
    name: 'Chicken sandwich',
    price: '$7.12',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150467/chicken-sammy.jpg',
  },
  {
    name: 'Classic Dog',
    price: '$4.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150520/classic-dog.jpg',
  },
  {
    name: 'Classic cheeseburger',
    price: '$5.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150542/classic-cheese.jpg',
  },
]

function Menu() {
  const [items, setItems] = useState([]);
  const isSelected = (item) => { return items.filter(function(value) 
    { return (value.name === item.name && value.price === item.price)}).length > 0};
  const addItem = (item) => { 
    console.log('adding');
    setItems([...items, item]);
   };
  const removeItem = (item) => { 
    console.log('removing');
    setItems(items.filter(function(value) {
      return (value.name !== item.name || value.price !== item.price);
    }));
  };
  const update = (item) => {
    console.log('updating');
    console.log(isSelected(item)); 
    isSelected(item) ? removeItem(item) : addItem(item)
  };
  

  return (
    <section>
      <dl>
        {menuItems.map(menuItem => {
          return (
            <MenuItem
              name={menuItem.name}
              price={menuItem.price}
              picture={menuItem.picture}
              obj={menuItem}
              update={update}
              selected={isSelected(menuItem)}
            />
          )
        })}
      </dl>
      <Receipt purchasedItems={items} />
    </section>
  )
}

export default Menu
