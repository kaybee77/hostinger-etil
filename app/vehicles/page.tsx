"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import VehicleCard from "../../components/VehicleCard";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/vehicles')
      .then((r) => {
        if (!r.ok) throw new Error('Network response not ok');
        return r.json();
      })
      .then((data) => {
        if (mounted) setVehicles(data.vehicles || []);
      })
      .catch((err) => {
        if (mounted) setError(String(err));
      });
    return () => { mounted = false };
  }, []);

  return (
    <main>
      <section className="vehicle-top-banner">
        <Image
          src="/copartandiaai.png"
          alt="Auction vehicles with Copart and IAAI branding"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Vehicles</span>
          <h1>Auction-sourced vehicles (Copart / IAA)</h1>
          <p className="lead">Browse recent auction lots sourced by our procurement team. For live inventory connect API keys for Copart/IAA in environment variables.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {error && <p style={{color: 'var(--accent)'}}>Error loading vehicles: {error}</p>}
          {!vehicles && !error && <p>Loading vehicles…</p>}
          {vehicles && (
            <div className="card-grid" style={{marginTop: '1rem'}}>
              {vehicles.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
