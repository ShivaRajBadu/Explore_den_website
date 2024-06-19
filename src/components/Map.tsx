"use client";
import Map, { Marker } from "react-map-gl";

import React from "react";
import "mapbox-gl/src/css/mapbox-gl.css";
const CustomMap = ({ location }: { location: any }) => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={{
        longitude: location.x,
        latitude: location.y,
        zoom: 10,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={location.x} latitude={location.y} anchor="bottom">
        <img src="/icons/pin.svg" />
      </Marker>
    </Map>
  );
};

export default CustomMap;
