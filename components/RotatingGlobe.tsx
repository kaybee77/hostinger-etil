import Image from "next/image";
import globeImage from "../public/AdobeStock_228562363.jpeg";

export default function RotatingGlobe() {
  return (
    <div className="rotating-globe-container">
      <div className="globe-3d-wrapper">
        <Image
          src={globeImage}
          alt="Africa map illustration"
          className="rotating-globe-image"
          sizes="(max-width: 640px) 200px, (max-width: 900px) 240px, 280px"
          priority
        />
      </div>

      <div className="globe-legend">
        <p className="globe-label">Serving West Africa</p>
        <p className="globe-subtext">6 markets across petrochemical, mining &amp; industrial sectors</p>
      </div>
    </div>
  );
}
