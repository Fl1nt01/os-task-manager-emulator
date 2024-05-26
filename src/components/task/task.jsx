import st from "./task.module.css";

export const Task = ({ name, timeToDo }) => {
	return (
		<div className={st.main}>
			<p>{name}</p>
			<p>Время выполнения:{timeToDo}</p>
		</div>
	);
};