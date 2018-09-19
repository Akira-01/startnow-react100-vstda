import React from 'react';

export default class ViewToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      priority: null,
      text: '',
      isComplete: false,


    };

    this.clickEdit = this.clickEdit.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.viewTodoEdit = this.viewTodoEdit.bind(this);
    this.viewToDoPriority = this.viewToDoPriority.bind(this);
    this.completedTask=this.completedTask.bind(this);
  }



  clickEdit(e) {
    this.props.edit(this.props.id)
  }


  clickDelete(e) {
    this.props.delete(this.props.id)
  }


  onSave() {
    this.props.save(this.props.id, this.state.text, this.state.priority);
  }



  viewTodoEdit(e) {
    this.setState(
      {
        text: e.target.value
      }
    );
  }

  viewToDoPriority(e) {
    this.setState(
      {
        priority: e.target.value

      }
    );
  }

 
  completedTask(e) {
  const {isComplete}=this.state
  this.setState({
    isComplete: !isComplete
  }

  )
 }
  
  
  
  render() {

    if (this.props.isEditing) {

      return (

        
        
         <div className='form-group todo'>
          
              
                <textarea className='update-todo-text' name='text' id='text area' rows='3' onChange={this.viewTodoEdit} />
                <label htmlFor='Priority'>Priority</label>

                <select name='update-todo-priority' onChange={this.viewToDoPriority}>
                  <option value='0'>Select a Priority</option>
                  <option value='1'>Low Priority</option>
                  <option value='2'>Medium Priority</option>
                  <option value='3'>High Priority</option>
                </select>

                <div className='row' />
                <button type='button' className='btn btn-primary update-todo' onClick={this.onSave}>Save</button>
                <div>
                </div>
              </div>
              
        

      )
    }

    return (
    
  
              

      <div className={` todo priority alert alert ${this.props.priority}`}>
        <input onChange={this.completedTask}
          type='checkbox' name='feature'
          value=''
          
        />
        <label className={ this.state.isComplete  ? 'strike-through':'' }> {this.props.text}</label>
        <button className='delete-todo' style={{ float: 'right' }} onClick={this.clickEdit}>Edit</button>
        <button className='edit-todo' style={{ float: 'right' }} onClick={this.clickDelete}>Delete</button>
      </div>
      

    );
  }
}
