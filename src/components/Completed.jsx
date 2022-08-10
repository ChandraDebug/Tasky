import { Fragment } from "react";
import Title from "./CompletedTitle";
import PriorityIcon from "./PriorityIcon";

function Completed(props) {
  const Tasks = props.list.filter(({ Status }) => {
    return Status;
  });

  const finishedTasks = Tasks.map(({ key, Task, Priority }) => {
    return (
      <tr className='fw-normal' key={key}>
        <td className='align-middle'>
          <span>{Task}</span>
        </td>
        <td className='align-middle'>
          <PriorityIcon severity={Priority} />
        </td>
        <td className='align-middle'>
          <a
            href='#!'
            onClick={() => props.ChangeStatus(key)}
            data-mdb-toggle='tooltip'
            title='Undo'>
            <i className='fas fa-undo text-warning me-3'></i>
          </a>

          <a
            href='#!'
            onClick={() => props.DeleteItem(key)}
            data-mdb-toggle='tooltip'
            title='Remove'>
            <i className='fas fa-trash-alt text-danger'></i>
          </a>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <Title Tasks={Tasks} />
      {finishedTasks}
    </Fragment>
  );
}

export default Completed;
