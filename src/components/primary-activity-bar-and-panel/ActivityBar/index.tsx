// src/components/ActivityBar.tsx
import React from 'react';
import styled from 'styled-components';

const ActivityBarContainer = styled.div`
  width: 50px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
interface Props {
  isPanelOpen: boolean;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activePanelId: string | null;
  setActivePanelId: React.Dispatch<React.SetStateAction<string | null>>;
  activities: { [key: string]: { icon: string; title: string; webviewHTML: string } };
}
const ActivityBar: React.FC<Props> = (props) => {
  return (
    <ActivityBarContainer>
      {Object.keys(props.activities).map((activityId) => {
        return (
          <ActivityBarIcon
            key={activityId}
            onClick={() => {
              if (activityId !== props.activePanelId) {
                props.setActivePanelId(activityId);
                !props.isPanelOpen && props.setIsPanelOpen(true);
              } else if (activityId === props.activePanelId) {
                props.setIsPanelOpen((prev) => !prev);
              }
            }}
            src={props.activities[activityId].icon}
            alt={props.activities[activityId].title}
            active={((props.activePanelId === activityId) && props.isPanelOpen)}
          />
        )
      })}
    </ActivityBarContainer>
  );
};
const ActivityBarIconContainer = styled.div<{ active: boolean }>`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: ${props => props.active ? '3px solid blue' : 'none'};
  opacity: ${props => props.active ? 1 : 0.5};
  &:hover {
    opacity: 1;
  }
`;

const ActivityBarIcon: React.FC<{ src: string; alt: string; onClick: () => void; active: boolean }> = (props) => {
  return (
    <ActivityBarIconContainer active={props.active} onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
    </ActivityBarIconContainer>
  );
};

export default ActivityBar;