import React, { ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode;
  flexDirection?: 'row' | 'column';
};

const Page = ({ children, flexDirection = 'row' }: Props): ReactElement => {
  return (
    <div className="container-fluid flexbox" style={{ flexDirection }}>
      {children}
    </div>
  );
};

export default Page;
