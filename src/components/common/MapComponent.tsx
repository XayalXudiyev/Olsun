"use client"

import GoogleMap from "./GoogleMap";

const MapComponent = ({
	zoom,
	containerStyle,
}: {
	zoom: number
	containerStyle: { width: string; height: string }
}) => {
	return (
		<div className="flex  flex-col shadow-lg h-full lg:h-[calc(100vh-300px)] mt-10">
			<div>Məkana xəritə üzərindən baxın</div>
			<GoogleMap
				center={{ lat: 40.37535, lng: 49.8485 }}
				zoom={zoom}
				containerStyle={containerStyle}
			/>
		</div>
	)
}

export default MapComponent
