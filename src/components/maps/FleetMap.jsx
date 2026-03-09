import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState, useEffect } from "react"
import L from "leaflet"

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
})

function FleetMap() {

  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Camión 21", position: [-33.4489, -70.6693] },
    { id: 2, name: "Van 08", position: [-33.4569, -70.6483] },
    { id: 3, name: "Pickup 14", position: [-33.4400, -70.6800] },
  ])

  useEffect(() => {

    const interval = setInterval(() => {

      setVehicles((prevVehicles) =>
        prevVehicles.map((v) => ({
          ...v,
          position: [
            v.position[0] + (Math.random() - 0.5) * 0.001,
            v.position[1] + (Math.random() - 0.5) * 0.001,
          ],
        }))
      )

    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (
    <MapContainer
      center={[-33.4489, -70.6693]}
      zoom={12}
      className="h-56 w-full rounded-lg"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map((v) => (
        <Marker key={v.id} position={v.position} icon={icon}>
          <Popup>
            {v.name}
            <br />
            Estado: Activo
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default FleetMap