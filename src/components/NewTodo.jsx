function NewTodo(props) {
  return (
    <div>
      <button
        type='button'
        data-mdb-toggle='modal'
        data-mdb-target='#todoModal'
        className='btn btn-secondary'>
        Add Task
      </button>

      <div className='modal fade' id='todoModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create New task</h5>
              <button
                type='button'
                className='btn-close'
                data-mdb-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <form onSubmit={props.AddTodo}>
              <div className='modal-body'>
                <div className='  mb-4'>
                  <input
                    name='task'
                    type='text'
                    id='todoTask'
                    className='form-control'
                  />
                  <label className='form-label' htmlFor='todoTask'>
                    Task
                  </label>
                </div>
                {/* <input name='task' type='text' className='form-control' /> */}
                <div className='form-outline mb-4'>
                  <select
                    name='priority'
                    className='form-select'
                    aria-label='Priority'>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                  </select>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-mdb-dismiss='modal'>
                  Close
                </button>
                <button
                  type='submit'
                  data-mdb-dismiss='modal'
                  className='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTodo;
