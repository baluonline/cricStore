"use client";
import { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";

const MapViewComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<unknown>(null);

  useEffect(() => {
    let view: { destroy: () => void } | null;

    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([Map, MapView]) => {
        const map = new Map({
          basemap: "topo-vector",
        });

        view = new MapView({
          container: mapRef.current!,
          map: map,
          center: [-93.265, 44.9778],
          zoom: 8,
        });
        viewRef.current = view;
      }
    );

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return <div style={{ height: "400px", width: "100%" }} ref={mapRef}></div>;
};

export default MapViewComponent;
