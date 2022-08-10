import Modal from "react-modal";

const customStyles = {
  content: {
    transform: "unset",
    border: 0,
    background: "transparent",
  },
};
Modal.setAppElement("#root");
function EditTask(props) {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}>
        <div>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Edit task</h5>
                <button
                  type='button'
                  onClick={props.closeModal}
                  className='btn-close'
                  data-mdb-dismiss='modal'
                  aria-label='Close'></button>
              </div>
              <form onSubmit={props.EditItem}>
                <div className='modal-body'>
                  <div className='  mb-4'>
                    <input
                      name='task'
                      type='text'
                      defaultValue={props.editTask.Task}
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
                      defaultValue={props.editTask.Priority}
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
                    onClick={props.closeModal}
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
      </Modal>
    </div>
  );
}

export default EditTask;
