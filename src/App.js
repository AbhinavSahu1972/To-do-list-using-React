import React, { Component } from 'react'
import MyInput from './MyInput';
import Navbar from './Navbar';

export class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      
      newTODO: '',
      todo:[
      {description: 'study' , done: false},
      {description: 'play' , done: true},
      {description: 'visit home' , done: false},
      {description: 'Exercise' , done: false},
    ] 
  }
  }

//function to enable the toggling of the checkboxes
checkBoxHandler = (e) =>{

  // console.log('checkBoxHandler fired!');
  this.setState(
   { 
    ...this.state ,  
   todo : this.state.todo.map(element =>{

    if(element.description == e.target.name){
      // console.log(element.description + '   '+e.target.name)
      // console.log(element.done + '   '+!element.done)

      return {...element , done: !element.done}
    }

    else{
      return element;
    }
  
  })}
    
  )
}

inputChangeHandler = (e) =>{
  // console.log('inputChangeHandler fired')
  this.setState({newTODO: e.target.value})
}

formHandler = (e) =>{
  e.preventDefault();
  this.addItemHandler();
}

addItemHandler = () =>{

  // console.log('Item has been added!');

  this.setState({name: 'Abhinav-Item has been added ' ,
   todo: [...this.state.todo , {description: this.state.newTODO , done: false}],
    newTODO: '' })

}
  
deleteHandler = (e) =>{
  console.log('deleteHandler fired!');

  e.target.parentElement.parentElement.remove();
  console.log('Item was removed!')
}

editHandler =(e)=>{
  console.log('edit feature fired!')
  
}
//Function to convert the todo list into a displayable format. 
  todoItems = () => {

    return(
      this.state.todo.map(element  =>{
       return(
        <div 
        key = {element.description} 
        className= 'todo-items'
        >

          <div className='flex-items'>{element.description}</div>

          <input 
          type='checkbox' 
          name = {element.description}
          checked  = {element.done} 
          onChange ={this.checkBoxHandler}
          className='flex-items'/>

        <div className='font-awesome-icons-container flex-items'>

          <i className="fa-solid fa-pen-to-square"
          onClick={this.editHandler}></i>
          <i className="fa-solid fa-trash-can"
          onClick={this.deleteHandler}></i>

        </div>

        </div>
          
       )
      })
    )
  }
 
  
  render() {

    return (
      <>
      <Navbar/>

    <form onSubmit={this.formHandler}>
        
      <MyInput 
        addItemHandler = {this.addItemHandler} 
        inputChangeHandler = {this.inputChangeHandler}
        newTODO = {this.state.newTODO}
        />

      </form>

      <div className='todo-list-container'>
          {this.todoItems()}
      </div>

      </>
    );
  }
}

export default App