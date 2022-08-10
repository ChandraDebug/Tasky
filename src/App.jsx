import Item from "./components/Item";
import NewTodo from "./components/NewTodo";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import tasklist from "./components/Items";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import EditTask from "./components/EditTask";

library.add(fas);

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [list, setList] = useState(tasklist);
  const MySwal = withReactContent(Swal);

  function openModal(taskid) {
    setIsOpen(true);
    const Task = list.filter((task) => {
      return task.key === taskid;
    });

    setEditTask(...Task);
  }

  function afterOpenModal(taskid) {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const AddTodo = (event) => {
    event.preventDefault();
    const todo = {
      key: Math.floor(Math.random() * 1000),
      Task: event.target.task.value,
      Status: false,
      Priority: event.target.priority.value,
    };

    setList([...list, todo]);
    MySwal.fire({
      title: "Task created",
      text: "Your new task is created",
      icon: "success",
    });
  };
  const EditItem = (event) => {
    event.preventDefault();

    const todo = {
      Task: event.target.task.value,
      Status: false,
      Priority: event.target.priority.value,
    };

    const updated = list.map((task) => {
      if (task.key === editTask.key) {
        return { ...task, ...todo };
      }
      return task;
    });

    setList(updated);
    closeModal();
    MySwal.fire({
      title: "Task updated",
      text: "Your task has been updated",
      icon: "success",
    });
  };

  const ChangeStatus = (id) => {
    const newlist = list.map((task) => {
      if (task.key === id)
        return {
          ...task,
          Status: !task.Status,
        };

      return task;
    });

    setList(newlist);
  };

  const DeleteItem = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "This will delete the task",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = list.filter((task) => {
          return task.key !== id;
        });
        setList(newList);
        Swal.fire("Deleted!", "Your Task has been deleted.", "success");
      }
    });
  };

  return (
    <section className='vh-100' style={{ backgroundColor: "#eee" }}>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-12 col-xl-10'>
            <div className='card'>
              <div className='bg-secondary text-white card-header p-3'>
                <h5 className='mb-0'>
                  <i className='fas fa-tasks me-2'></i>
                  <span className='fw-bold '>Tasky</span>
                </h5>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar='true'>
                <table className='table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>
                        <span className='fw-bolder'>Task</span>
                      </th>
                      <th scope='col'>
                        <span className='fw-bolder'>Priority</span>
                      </th>
                      <th scope='col'>
                        <span className='fw-bolder'>Actions</span>
                      </th>
                    </tr>
                  </thead>

                  <Item
                    list={list}
                    DeleteItem={DeleteItem}
                    ChangeStatus={ChangeStatus}
                    openModal={openModal}
                    afterOpenModal={afterOpenModal}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    EditItem={EditItem}
                  />
                </table>
              </div>

              {modalIsOpen && (
                <EditTask
                  editTask={editTask}
                  EditItem={EditItem}
                  openModal={openModal}
                  afterOpenModal={afterOpenModal}
                  closeModal={closeModal}
                  modalIsOpen={modalIsOpen}
                />
              )}

              <div className='bg-light card-footer text-end p-3'>
                <NewTodo AddTodo={AddTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
