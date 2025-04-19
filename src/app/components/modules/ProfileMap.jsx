import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapExample = () => {
    const [mapReady, setMapReady] = useState(false);
    const position = [35.6892, 51.3890];

    useEffect(() => {
        setMapReady(true);
    }, []);

    return (
        <>
            {mapReady && (
                <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            این مکان تهران است.
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    );
};

export default MapExample