import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Title = (props) => {
  return props.Tasks.length ? (
    <tr>
      <th colSpan='3' className='align-middle'>
        <h6>
          <FontAwesomeIcon
            icon='fa-solid fa-circle-check'
            className='text-success '
            size='lg'
          />
          <span className='ps-2'>Completed tasks</span>
        </h6>
      </th>
    </tr>
  ) : (
    ""
  );
};

export default Title;
