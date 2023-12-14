"use client";
import Link from "next/link";
import classes from "./card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Card = ({ data }) => {
	return (
		<Link href={`/product/${data.id}`} className={classes.Card}>
			<div className={classes.img}>
				<LazyLoadImage
					src={data?.photo_url}
					alt='card'
					height={"auto"}
					width={"auto"}
				/>
			</div>
			<div className={classes.content}>
				<p className={classes.title}>{data.title}</p>
				<p className={classes.text}>{data.description}</p>
				<p className={classes.price}>$ {data.price}</p>
			</div>
		</Link>
	);
};
export default React.memo(Card);
