export const dynamicBlurDataUrl = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 100 50" preserveAspectRatio="none">
    <rect width="100%" height="100%" fill="#f0f0f0" />
    <rect width="100%" height="100%" fill="url(#shimmer)" />
    <defs>
      <linearGradient id="shimmer">
        <stop offset="0%" stop-color="#f5f5f5" stop-opacity="0" />
        <stop offset="50%" stop-color="#e0e0e0" stop-opacity="1" />
        <stop offset="100%" stop-color="#f5f5f5" stop-opacity="0" />
        <animateTransform attributeName="gradientTransform" type="translate" from="-100 0" to="100 0" dur="1s" repeatCount="indefinite" />
      </linearGradient>
    </defs>
  </svg>`
).toString("base64")}`;

