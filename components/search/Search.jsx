"use client";
import { useState } from "react";
import classes from "./search.module.scss";
import { useGetAllProductsByCategoryIdQuery } from "@/store/middleWares/productsApi";
import Link from "next/link";
import { MdOutlineSearch } from "react-icons/md";

export const Search = () => {
	const [searchItem, setSearchItem] = useState("");
	const { data: products = [] } = useGetAllProductsByCategoryIdQuery();

	return (
		<div className={classes.Search}>
			<div className={classes.Search_wrap}>
				<MdOutlineSearch className={classes.icon} />
				<input
					type='text'
					placeholder='search...'
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>
			<div
				className={
					searchItem ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{searchItem &&
				products?.items?.filter((el) => el.title.includes(searchItem))
					.length ? (
					products?.items
						?.filter((el) => el.title.includes(searchItem))
						.map((el, index) => (
							<Link href={`/product/${el.title}`} key={index}>
								{el.title}
							</Link>
						))
				) : (
					<p>Not Found...</p>
				)}
			</div>
		</div>
	);
};
