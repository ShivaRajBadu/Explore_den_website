"use client";
import Map, { Marker } from "react-map-gl";

import React from "react";
import "mapbox-gl/src/css/mapbox-gl.css";
import Image from "next/image";
const CustomMap = ({ location }: { location: any }) => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={{
        longitude: location.y,
        latitude: location.x,
        zoom: 15,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={location.y} latitude={location.x} anchor="bottom">
        <Image src="/icons/pin.svg" alt="pin" width={24} height={24} />
      </Marker>
    </Map>
  );
};

export default CustomMap;
