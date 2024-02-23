import React, { Suspense } from "react";

// project imports
import Loader from "./Loader";

// Loadable component with lazy loading and suspense
const Loadable = (ComponentPromise) => {
  const LazyComponent = React.lazy(ComponentPromise);

  return (props) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default Loadable;
