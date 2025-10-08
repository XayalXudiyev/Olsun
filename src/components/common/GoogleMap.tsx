"use client"

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import React from "react"

const APİ_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

function MapComponent({
	center,
	zoom,
	containerStyle,
}: {
	center: { lat: number; lng: number }
	zoom: number
	containerStyle: { width: string; height: string }
}) {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: APİ_KEY,
	})

	if (!isLoaded) return <div>Loading...</div>

	return (
		<GoogleMap center={center} zoom={zoom} mapContainerStyle={containerStyle}>
			<Marker position={center} />
		</GoogleMap>
	)
}

export default React.memo(MapComponent)
