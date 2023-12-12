"use client";
import classes from "./footer.module.scss";
import logo from "../../public/logom.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import visa from "../../public/visa.svg";
import master from "../../public/master.svg";
import paypal from "../../public/paypal.svg";
import Image from "next/image";
import { useGetAllCategoriesQuery } from "@/store/middleWares/categoriesApi";
import Link from "next/link";
import { Location } from "../location/Location";
import Container from "../container/Container";

const list = [
	{ link: "", icon: <WhatsAppIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <InstagramIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <FacebookIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <TwitterIcon sx={{ fontSize: "inherit" }} /> },
];

export const Footer = () => {
	const { data = [] } = useGetAllCategoriesQuery();
	return (
		<footer className={classes.Footer}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<div className={classes.top_item}>
							<div className={classes.logo}>
								<Image src={logo} alt='logo' />
								<p>`Quality is not a Coincidence`</p>
							</div>
							<div className={classes.address}>
								<p>Eshoni Pir St. 63</p>
								<p>200100 Bukhara Uzbekistan</p>
								<p>Mobile: +998918271011</p>
							</div>
						</div>
						<div className={classes.top_item3}>
							{data?.items?.map((el, index) => (
								<Link key={index} href={`/category/${el.name}`}>
									{el.name}
								</Link>
							))}
						</div>
						<Location />
					</div>
					<div className={classes.bottom}>
						{list.map((el, index) => (
							<a href={el.link} key={index}>
								{el.icon}
							</a>
						))}
					</div>
					<div className={classes.payment}>
						<p>Copyright 2012 - 2023 © Minzifa suzani online shopping.</p>
						<div className={classes.payment_inner}>
							<Image src={visa} alt='visa' />
							<Image src={master} alt='master' />
							<Image src={paypal} alt='paypal' />
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
