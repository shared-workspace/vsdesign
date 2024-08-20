// src/components/MainWorkbench.tsx
import React from 'react';
import styled from 'styled-components';

const MainWorkbenchContainer = styled.div`
  background-color: #555;
  height: 100%;
  flex-grow: 1;
`;

const MainWorkbench: React.FC = () => {
  return (
    <MainWorkbenchContainer>
      {/* Add main workbench content here */}
    </MainWorkbenchContainer>
  );
};

export default MainWorkbench;
