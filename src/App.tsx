// src/App.tsx
import React from 'react';
import { FocusStyleManager } from '@blueprintjs/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import MainWorkbench from '@/components/MainWorkbench';
import PrimaryActivityBarAndPanel from './components/primary-activity-bar-and-panel';

FocusStyleManager.onlyShowFocusOnTabs();

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
          <PrimaryActivityBarAndPanel />
          <MainWorkbench />
      </AppContainer>
    </DndProvider>
  );
};

export default App;