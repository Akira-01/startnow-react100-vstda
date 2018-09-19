import React from 'react';

export default class Form extends React.Component {
  render() {
    return (

      <div className='form-group' >
         <div className="card">
          <div className="card-header">
            Add New Todo
       </div>
        </div>

        <div className='form-group'>
          <div className="card-body">
            <label htmlFor='I want to..'>I want to..</label>
            <textarea className='create-todo-text' name='text' id='text area' rows='3' onChange={this.props.handleChange} />


            <label htmlFor='How much of a priority is this?'>How much of a priority is this?</label>



            <select name='priority' className='create-todo-priority' onChange={this.props.handleChange}>
              <option value='0'>Select a Priority</option>
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>

            <div className='row' />
            <hr />
            <button className="btn btn-primary create-todo" onClick={this.props.handleClick}>Add </button>
          </div>
        </div>
      </div>
    )
      ;
  }
}
