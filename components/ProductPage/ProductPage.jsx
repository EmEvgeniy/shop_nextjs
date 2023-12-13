"use client";
import { useGetAllProductsByCategoryIdQuery } from "../../store/middleWares/productsApi";
import { useGetAllCategoriesQuery } from "../../store/middleWares/categoriesApi";
import { useEffect, useMemo, useState } from "react";
import classes from "./productPage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "next/navigation";
import Container from "../container/Container";

const ProductPage = () => {
	const params = useParams();
	const { data: products = [] } = useGetAllProductsByCategoryIdQuery();
	const { data: category = [] } = useGetAllCategoriesQuery();
	const [cTitle, setcTitle] = useState("");
	const [phoneNumber] = useState("+998918271011"); // Замените на ваш номер телефона
	const [messageText] = useState(
		`https://minzifashop.com/product/${params.slug}`
	); // Замените на ваш текст

	const generateWhatsAppLink = () => {
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
			messageText
		)}`;
		return whatsappLink;
	};
	const filteredProducts = useMemo(() => {
		return products?.items?.filter((el) => el.title == params.slug);
	}, [products, params]);

	useEffect(() => {
		setcTitle(
			category?.items?.filter(
				(el) => el?.id == filteredProducts[0]?.category_id
			)[0]?.name
		);
	}, [category, filteredProducts]);

	if (products?.items?.length && products?.items?.length) {
		return (
			<div className={classes.ProductPage}>
				<Container>
					<div className={classes.inner}>
						<div className={classes.img}>
							<LazyLoadImage
								src={filteredProducts[0]?.photo_url}
								alt='pg'
								width={"auto"}
								height={"auto"}
							/>
							<p>{filteredProducts[0]?.description}</p>
						</div>
						<div className={classes.info}>
							<div>
								<p>Category:</p> <span>{cTitle}</span>{" "}
							</div>
							<div>
								<p>Title:</p> <span>{filteredProducts[0]?.title}</span>{" "}
							</div>
							<div>
								<p>Price:</p> <span>$ {filteredProducts[0]?.price}</span>{" "}
							</div>
							<a href={generateWhatsAppLink()} target='__blank'>
								What`s app
							</a>
						</div>
					</div>
				</Container>
			</div>
		);
	}
};

export default ProductPage;
