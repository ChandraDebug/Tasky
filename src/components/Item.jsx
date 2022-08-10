import Completed from "./Completed";

import Pending from "./Todo";

function Item(props) {
  return (
    <tbody>
      <Pending
        list={props.list}
        ChangeStatus={props.ChangeStatus}
        DeleteItem={props.DeleteItem}
        openModal={props.openModal}
        EditItem={props.EditItem}
      />

      <Completed
        list={props.list}
        ChangeStatus={props.ChangeStatus}
        DeleteItem={props.DeleteItem}
        openModal={props.openModal}
      />
    </tbody>
  );
}

export default Item;
