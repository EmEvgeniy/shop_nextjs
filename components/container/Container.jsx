import classes from "./container.module.scss";

export default function Container({ children }) {
	return <div className={classes.Container}>{children}</div>;
}
