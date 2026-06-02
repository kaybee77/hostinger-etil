export default function VehicleCard({ vehicle }: { vehicle: any }) {
  return (
    <article className="card">
      <div style={{display: 'grid', gap: '.5rem'}}>
        {/* Sourced from external auction APIs (Copart/IAA), so a plain <img> with
            native lazy-loading is used instead of next/image, which would require
            allowlisting arbitrary auction CDN domains. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={vehicle.image} alt={vehicle.title} loading="lazy" decoding="async" style={{width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px'}} />
        <div>
          <h3 style={{margin: 0}}>{vehicle.title}</h3>
          <p style={{margin: '0.35rem 0', color: 'var(--text-2)'}}>{vehicle.lot} · {vehicle.location}</p>
          <p style={{margin:0}}><strong>{vehicle.price}</strong> <span style={{color: 'var(--muted)', marginLeft: '0.5rem'}}>{vehicle.status}</span></p>
          <p style={{marginTop: '0.5rem', color: 'var(--muted)'}}>{vehicle.damage ? `Damage: ${vehicle.damage}` : 'No recorded damage'}</p>
        </div>
      </div>
    </article>
  );
}
