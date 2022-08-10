import EditTask from "./EditTask";
import PriorityIcon from "./PriorityIcon";

function Pending(props) {
  const Tasks = props.list.filter(({ Status }) => {
    return !Status;
  });

  const Updatetask = (key) => {
    props.openModal(key);
  };

  return Tasks.map(({ key, Task, Priority }) => {
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
            title='Done'>
            <i className='fas fa-check text-success me-3'></i>
          </a>

          {/* <a
            href='#!'
            onClick={() => <EditTask key={key} />}
            data-mdb-toggle='tooltip'
            title='Remove'>
            <i className='fas fa-pencil text-secondary me-3'></i>
          </a> */}

          <a
            onClick={() => Updatetask(key)}
            data-mdb-toggle='modal'
            data-mdb-target='#editModal'>
            <i className='fas fa-pencil text-secondary me-3'></i>
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
}

export default Pending;
