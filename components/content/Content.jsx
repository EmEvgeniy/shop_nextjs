"use client";
import classes from "./content.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import React, { useMemo } from "react";
import ContentNav from "./contentNav/ContentNav";
import { useGetAllProductsByCategoryIdQuery } from "@/store/middleWares/productsApi";
import Container from "../container/Container";
import Card from "../card/Card";

function Content() {
	const { data: products = [], isFetching } =
		useGetAllProductsByCategoryIdQuery();
	const categoryId = useSelector((state) => state.categoryId.value);

	const filteredProducts = useMemo(() => {
		return products?.items?.filter((el) => el.category_id === categoryId);
	}, [products, categoryId]);

	return (
		<section id='content' className={classes.Content}>
			<Container>
				<div className={classes.inner}>
					<ContentNav />
					<motion.div
						initial={{ opacity: 0 }}
						animate={isFetching ? { opacity: 0 } : { opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.4 }}
						className={classes.inner_content}>
						{filteredProducts?.map((el, index) => (
							<Card data={el} key={index} isFetching={isFetching} />
						))}
					</motion.div>
				</div>
			</Container>
		</section>
	);
}

export default React.memo(Content);
