"use client";
import Container from "../container/Container";
import classes from "./homeHero.module.scss";
import { Link } from "react-scroll";

export default function HomeHero() {
	return (
		<section className={classes.HomeHero}>
			<Container>
				<div className={classes.inner}>
					<h1>
						WELCOME TO <span>MINZIFA SUZANI SHOP</span>
					</h1>
					<p>
						Welcome to our handmade store, where creativity comes to life in
						every item. Here, you`ll discover unique treasures crafted with love
						and care, designed to adorn your life with unparalleled beauty.
					</p>
					<Link
						to={"content"}
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						See more
					</Link>
				</div>
			</Container>
		</section>
	);
}
