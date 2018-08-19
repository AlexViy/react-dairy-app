import React from 'react';
import Button from './Button';
import Badge from './Badge';

function Item() {
  return (
    <div className="Item">
      <div className="Item-cont">
        <span>Some new item</span>
        <Badge />
      </div>
      <Button styleName="Delete-btn" name="Delete" />
    </div>
  );
}
export default Item;