"use client";
import { useGetAllCategoriesQuery } from "@/store/middleWares/categoriesApi";
import classes from "./nav.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
	const [id, setId] = useState(null);
	const { data = [], isSuccess } = useGetAllCategoriesQuery();
	const status = useSelector((state) => state.burger.value);

	useEffect(() => {
		if (status) {
			document.querySelector("body").classList.add("hold");
		} else {
			document.querySelector("body").classList.remove("hold");
		}
	}, [status]);

	return (
		<nav
			className={
				status ? `${classes.Nav} ${classes.active}` : `${classes.Nav}`
			}>
			{isSuccess
				? data?.items?.map((el) => (
						<Link
							key={el.id}
							className={classes.Nav_item}
							onMouseOver={() => setId(el.id)}
							onMouseLeave={() => setId(null)}
							href={`/category/${el.id}`}>
							<span>{el.name}</span>
							{el.id === id && el.sub_categories.length ? (
								<div
									className={classes.sub_category}
									onMouseOver={() => setId(el.id)}
									onMouseLeave={() => setId(null)}>
									{el.sub_categories.map((item) => (
										<span key={item.id}>{item.name}</span>
									))}
								</div>
							) : null}
						</Link>
				  ))
				: null}
		</nav>
	);
}
