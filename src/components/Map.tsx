"use client";
import Map, { Marker } from "react-map-gl";

import React from "react";
import "mapbox-gl/src/css/mapbox-gl.css";
const CustomMap = ({ location }: { location: any }) => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={{
        longitude: 85.324,
        latitude: 27.7172,
        zoom: 6,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={85.324} latitude={27.7172} anchor="bottom">
        <img src="/icons/pin.svg" />
      </Marker>
    </Map>
  );
};

export default CustomMap;
