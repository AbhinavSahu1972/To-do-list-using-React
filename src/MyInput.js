import React, { Component } from 'react'


export default class MyInput extends Component {
    constructor(props) {
      super(props)
    
    }

    render(props) {

        const {newTODO , inputChangeHandler , addItemHandler} = this.props;
    return (

        
    <div className='input-control'>
        
        <input type='text' 
        value = {newTODO}
        onChange = {inputChangeHandler}
        placeholder = 'Enter a new Item ...'
        />
        <button 
        type = 'button'
        onClick={addItemHandler}>Add Item</button>

    </div>
    )
  }
}
