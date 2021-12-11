import React, { lazy, Suspense } from 'react';

const LazyGoogleMaps = lazy(() => import('./GoogleMaps'));

const GoogleMaps = props => (
  <Suspense fallback={null}>
    <LazyGoogleMaps {...props} />
  </Suspense>
);

export default GoogleMaps;
