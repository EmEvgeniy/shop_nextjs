import { Montserrat } from "next/font/google";
import "./globals.scss";
import ProviderWrap from "@/components/providerWrap/ProviderWrap";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const inter = Montserrat({
	subsets: ["latin"],
	preload: true,
	weight: ["400", "500", "600", "800"],
});

export const metadata = {
	title: "Minzifa-Shop",
	description:
		"Explore the exquisite world of Suzani at Minzifa, your premier online destination for timeless and vibrant handcrafted textiles. Discover a curated collection of authentic Suzani embroideries, each telling a unique story through intricate patterns and rich cultural heritage. Immerse yourself in the artistry of Central Asian craftsmanship as you browse through our carefully selected Suzani treasures. Elevate your space with the beauty of Minzifa's Suzani creations – where tradition meets contemporary style. Shop now and bring the art of Suzani into your home.",
	icons: {
		icon: ["./favicon.ico"],
		apple: ["./favicon.ico"],
		shortcut: ["./favicon.ico"],
	},
	manifest: "../site.webmanifest",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ProviderWrap>
					<Header />
					<main>{children}</main>
					<Footer />
				</ProviderWrap>
			</body>
		</html>
	);
}
