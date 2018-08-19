import React from 'react';
import Button from './Button';

function Form() {
  return (
    <form className="Add-new">
      <input type="text" placeholder="Input text here" col="30"></input>
      <Button styleName="Add-new-btn" name="Add new" />
    </form>
  );
}
export default Form;