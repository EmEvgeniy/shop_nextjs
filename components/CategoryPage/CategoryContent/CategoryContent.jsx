"use client";
import { useEffect, useState } from "react";
import classes from "./categoryContent.module.css";

import { useSelector } from "react-redux";
import Container from "@/components/container/Container";
import Card from "@/components/card/Card";
import { useGetAllCategoriesQuery } from "@/store/middleWares/categoriesApi";

export const CategoryContent = ({ data, id }) => {
	const { data: category = [] } = useGetAllCategoriesQuery();
	const [title, setTitle] = useState("");
	const subId = useSelector((state) => state.categoryId.value2);

	useEffect(() => {
		setTitle(category?.items?.filter((el) => el.id == id)[0]?.name);
	}, [id, category]);

	return (
		<div className={classes.CategoryContent}>
			<Container>
				<div className={classes.inner}>
					<h1>{title}</h1>
					<ul className={classes.list}>
						{category?.items
							?.filter((el) => el.id == id)[0]
							?.sub_categories?.map((el) => (
								<li
									className={
										subId === el.id
											? `${classes.list_item} ${classes.active}`
											: `${classes.list_item}`
									}
									key={el.id}>
									{el.name}
								</li>
							))}
					</ul>
					<div className={classes.inner_content}>
						{data
							?.filter((el) =>
								el?.sub_category_id ? el.sub_category_id === subId : el
							)
							.map((el, index) => (
								<Card key={index} data={el} />
							))}
					</div>
				</div>
			</Container>
		</div>
	);
};
