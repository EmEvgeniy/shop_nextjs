import Container from "../container/Container";
import { Search } from "../search/Search";
import classes from "./header.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import { SocialLinks } from "../socialLinks/SocialLinks";
import Link from "next/link";
import { Burger } from "../burger/Burger";
import Nav from "../nav/Nav";

export default function Header() {
	return (
		<header className={classes.Header}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<Search />
						<Link href={"/"}>
							<Image src={logo} alt='' width={120} height={50} priority />
						</Link>
						<SocialLinks />
						<Burger />
					</div>
					<Nav />
				</div>
			</Container>
		</header>
	);
}
