import React, { Component } from 'react';
import Form from './Form';
import ViewToDo from './ViewToDo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      priority: null,
      text: '',
      listitems: [],


    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleViewTodoEdit = this.handleViewTodoEdit.bind(this);
    this.handleViewTodoDelete = this.handleViewTodoDelete.bind(this);
    this.handleEditChanges = this.handleEditChanges.bind(this);
    this.onSave = this.onSave.bind(this);
  }


  handleClick(e) {
    const newTodo = {
      text: this.state.text,
      priority: this.state.priority,
      id: Date.now(),
      isEditing: false
    };
    const newArray = [...this.state.listitems];
    newArray.push(newTodo);
    this.setState({
      listitems: newArray
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleEditChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  onSave(id, text, priority) {
    console.log(id, text, priority);
    // 1. set state of listitems to empty array
    const newArray = [...this.state.listitems];
    const tempId = id;
    // 2. Find index of todo newArray with todo id matching the id we get in the params
    /* this part is up to you */
    const index = newArray.findIndex(item => item.id === tempId);
    // 3. remove (splice) element from array based on index
    //newArray.splice(index,1);
    // CHANGE is editing to false
    newArray[index].isEditing = false
    newArray[index].text = text;
    newArray[index].priority = priority;

    //change todo text
    //change todo priority
    //update todos in App.state.listitems
    this.setState({
      listitems: newArray
    });



  }


  handleViewTodoEdit(id) {
    // 1. set state of listitems to empty array
    const newArray = [...this.state.listitems];
    const tempId = id;
    // 2. Find index of todo newArray with todo id matching the id we get in the params
    /* this part is up to you */
    const index = newArray.findIndex(item => item.id === tempId);
    // 3. remove (splice) element from array based on index
    //newArray.splice(index,1);
    // CHANGE is editing to true
    newArray[index].isEditing = true
    
    
    this.setState({
      listitems: newArray
    });


  }


  handleViewTodoDelete(id) {
    // 1. set state of listitems to empty array
    const newArray = [...this.state.listitems];
    const tempId = id;
    // 2. Find index of todo newArray with todo id matching the id we get in the params
    /* this part is up to you */
    const index = newArray.findIndex(item => item.id === tempId);
    // 3. remove (splice) element from array based on index
    newArray.splice(index, 1);
    this.setState({
      listitems: newArray
    });
    //this.setState({temperature: e.target.value});
  }
  // updateTodo(e) {


  // }

  render() {
    return (
      <div>
        <div className='container' >
          <h1>Very Simple Todo App</h1>
          <h2>Track all of the things</h2>
          <hr />

          <div className='form-group '>
            <div className='row' >
              <div className='form col-md-5'>
                <Form
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                />
              </div>
              <div className='col-md-7'>
              <div className='card'>
            <div className='card-header' >
              View Todos 
              </div>
              </div>
                
                
                
                {/* <ViewToDo onChange={this.handleChange} onClick={this.handleClick} /> */}
                {this.state.listitems.length > 0 &&
                  this.state.listitems.map((listitem, index) => {
                    let priority;
                    if (listitem.priority == 1) {
                      priority = 'alert-success';
                    } else if (listitem.priority == 2) {
                      priority = 'alert-warning';
                    } else if (listitem.priority == 3) {
                      priority = 'alert-danger';
                    }
                    console.log(priority);

                    return (
                      
                      <ViewToDo
                        id={listitem.id}
                        text={listitem.text}
                        priority={priority}
                        edit={this.handleViewTodoEdit}
                        delete={this.handleViewTodoDelete}
                        isEditing={listitem.isEditing}
                        save={this.onSave} 
                        />
                    
                      );

                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

