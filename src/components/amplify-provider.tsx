'use client';

import { Amplify } from 'aws-amplify';
import outputs from '@/../amplify_outputs.json';
import { useEffect, useState } from 'react';

interface AmplifyProviderProps {
  children?: React.ReactNode;
}

const AmplifyProvider = ({ children }: AmplifyProviderProps) => {
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    if (!configured) {
      Amplify.configure(outputs, { ssr: true });

      setConfigured(true);
    }
  }, []);

  if (!configured) {
    return null;
  }

  return <>{children}</>;
};

export default AmplifyProvider;
