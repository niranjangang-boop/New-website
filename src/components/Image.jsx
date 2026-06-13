/**
 * CLS-safe, performance-first image component.
 *
 * - `width`/`height` are REQUIRED → browser reserves space, zero layout shift.
 * - `aspect` (e.g. "4/5") optionally enforces a responsive aspect-ratio box.
 * - `avifSrc`/`webpSrc` render a <picture> with modern formats first.
 * - `priority` → eager load + fetchpriority="high" (use ONLY for the hero/LCP image).
 * - Everything else lazy-loads with async decoding.
 */
export default function Image({
  src,
  alt,
  width,
  height,
  aspect,
  avifSrc,
  webpSrc,
  priority = false,
  sizes,
  className = '',
  imgClassName = '',
}) {
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={loading}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={fetchPriority}
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {avifSrc || webpSrc ? (
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" sizes={sizes} />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}
