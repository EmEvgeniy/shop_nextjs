"use client";
import { CategoryContent } from "./CategoryContent/CategoryContent";
import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";
import { getCategoryId } from "../../store/slices/categoryIdSlice";
import { useParams } from "next/navigation";
import { useGetAllProductsByCategoryIdQuery } from "@/store/middleWares/productsApi";

const CategoryPage = () => {
	const params = useParams();
	const { data: products = [] } = useGetAllProductsByCategoryIdQuery();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategoryId(params?.id));
	}, [dispatch, params]);

	const filteredProducts = useMemo(() => {
		return products?.items?.filter((el) => el.category_id == params.id);
	}, [products, params]);

	return (
		<>
			<CategoryContent data={filteredProducts} id={params.id} />
		</>
	);
};

export default CategoryPage;
