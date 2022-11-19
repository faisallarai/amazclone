import React, { ReactNode, useEffect, useState } from 'react';

interface INoSSSRProps {
  children: ReactNode;
}
const NoSSR = ({ children }: INoSSSRProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted ? children : null}</>;
};

export default NoSSR;
