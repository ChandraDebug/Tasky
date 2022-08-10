const classSeverity = {
  High: "bg-danger",
  Medium: "bg-warning",
  Low: "bg-info",
};

export default function PriorityIcon(props) {
  let classsevere = "bg-info";
  if (props.severity === "High") {
    classsevere = "bg-danger";
  } else if (props.severity === "Medium") {
    classsevere = "bg-warning";
  }
  return (
    <h6 className='mb-0'>
      <span className={`badge ${classsevere}`}>{props.severity}</span>
    </h6>
  );
}
