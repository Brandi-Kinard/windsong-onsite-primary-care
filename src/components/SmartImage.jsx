import React, { useState } from 'react';

/* Image with graceful beige fallback — if a placeholder stock URL
   ever fails to load, a labeled neutral block renders instead so the
   site never shows a broken image. */
export default function SmartImage({ image, className, style }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        style={{
          background: 'linear-gradient(135deg, #F3EAE0 0%, #E9DCCB 60%, #E2C7C0 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#82644A', fontSize: '0.85rem', fontWeight: 600,
          textAlign: 'center', padding: '1rem', minHeight: '260px',
          borderRadius: 'inherit', width: '100%', height: '100%',
          ...style,
        }}
      >
        {image.label || 'Photo placeholder'}
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
