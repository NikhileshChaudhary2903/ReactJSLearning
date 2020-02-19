import React, { Component } from 'react'

class Items extends Component {

 render() {

  const { items, toggleItem } = this.props;

  const itemList = items.map((item, i) => {
   return (
    <li>
     <div className="items" key={item.id}>
      {item.isDisplayed && (<> <div>Name: {item.name}</div>
       <div>Price: {item.price}</div> </>)
      }
      <button onClick={() => { toggleItem(item.id) }}>{item.isDisplayed ? 'Hide Me' : 'Show me'}</button>
     </div>
    </li >
   );
  })
  return (
   <div className="item-list" >
    <ul>
     {itemList}
    </ul>
   </div>
  );
 }
}

export default Items;
