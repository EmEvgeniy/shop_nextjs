"use client";
import { motion } from "framer-motion";
import classes from "./contentNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { useGetAllCategoriesQuery } from "@/store/middleWares/categoriesApi";
import { getCategoryId } from "@/store/slices/categoryIdSlice";

const ContentNav = () => {
	const { data: categories = [], isSuccess } = useGetAllCategoriesQuery();
	const categoryId = useSelector((state) => state.categoryId.value);
	const dispatch = useDispatch();

	useEffect(() => {
		if (categories?.items?.length) {
			dispatch(getCategoryId(categories?.items[0]?.id));
		}
	}, [dispatch, categories]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={isSuccess ? { opacity: 1 } : { opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ delay: `0.3`, duration: 0.5 }}
			className={classes.inner_nav}>
			{categories?.items?.map((el, index) => (
				<span
					className={
						categoryId === el.id
							? `${classes.inner_nav_item} ${classes.active}`
							: `${classes.inner_nav_item}`
					}
					onClick={() => dispatch(getCategoryId(el.id))}
					key={index}>
					{el.name}
				</span>
			))}
		</motion.div>
	);
};

export default memo(ContentNav);
