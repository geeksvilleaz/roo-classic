'use client';

import { useContext, createContext } from 'react';

const LoadingContext = createContext([
  {
    mode: '',
    initializing: true,
  },
  function () {},
]);

function useLoading() {
  return useContext(LoadingContext);
}

export { LoadingContext };
export default useLoading;
