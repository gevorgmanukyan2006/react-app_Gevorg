import Styles from "./styles.module.css";

const DeleteTask = (props) => {
  return (
    <div className={Styles.DeleteDiv}>
      <input type="text" onChange={props.onChange} />
      <button onClick={props.delete}>Delete Task</button>
    </div>
  );
};

export default DeleteTask;
