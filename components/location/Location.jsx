import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Location = () => {
	const defaultState = {
		center: [39.770566, 64.420408],
		zoom: 16,
	};

	return (
		<YMaps
			className='ymap'
			style={{
				width: "100%",
				height: "200px",
				borderRadius: "20px !important",
			}}>
			<Map
				defaultState={defaultState}
				style={{
					width: "100%",
					height: "200px",
					borderRadius: "20px !important",
				}}
				className='as'>
				<Placemark geometry={[39.770566, 64.420408]} />
			</Map>
		</YMaps>
	);
};
