"use client";
import { useDispatch, useSelector } from "react-redux";
import classes from "./burger.module.scss";
import { changeBurgerStatus } from "@/store/slices/BurgerSlice";

export const Burger = () => {
	const status = useSelector((state) => state.burger.value);
	const dispatch = useDispatch();

	return (
		<div
			className={
				status ? `${classes.burger} ${classes.active}` : `${classes.burger}`
			}
			onClick={() => dispatch(changeBurgerStatus(!status))}>
			<span />
		</div>
	);
};
