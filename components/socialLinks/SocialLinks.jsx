import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import classes from "./socialLinks.module.scss";

const list = [
	{ link: "", icon: <WhatsAppIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <InstagramIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <FacebookIcon sx={{ fontSize: "inherit" }} /> },
	{ link: "", icon: <TwitterIcon sx={{ fontSize: "inherit" }} /> },
];

export const SocialLinks = () => {
	return (
		<ul className={classes.SocialLinks}>
			{list.map((el, index) => (
				<li key={index}>
					<a href={el.link}>{el.icon}</a>
				</li>
			))}
		</ul>
	);
};
