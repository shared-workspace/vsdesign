// src/components/SidePanel.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ActivityPanelContainer = styled.div<{ width: number }>`
  background-color: #444;
  height: 100%;
  width: ${(props) => props.width}px;
  position: relative;
  overflow: hidden;
`;

const Resizer = styled.div`
  width: 10px;
  height: 100%;
  background-color: #666;
  position: absolute;
  right: 0;
  top: 0;
  cursor: ew-resize;
  transition: background-color 0.2s;

  &:hover {
    background-color: blue;
  }
`;
interface Props {
  isPanelOpen: boolean;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  webviewHTML: string;
}

const ActivityPanel: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const clientX = e.clientX - 50;
      if (props.isPanelOpen && clientX < 20) {
        props.setIsPanelOpen(false);
        setWidth(150);
      } else {
        setWidth(clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <ActivityPanelContainer width={props.isPanelOpen ? width : 0} style={{minWidth: props.isPanelOpen ? 100 : 0}}>
      <ActivityPanelContent __html={props.webviewHTML} />
      <Resizer onMouseDown={handleMouseDown} />
    </ActivityPanelContainer>
  );
};
const ActivityPanelContentContainer = styled.div`
  height: 100%;
`;

const ActivityPanelContent: React.FC<{__html: Props["webviewHTML"]}> = ({ __html }) => {
  return (
    <ActivityPanelContentContainer dangerouslySetInnerHTML={{ __html }} />
  );
}

export default ActivityPanel;