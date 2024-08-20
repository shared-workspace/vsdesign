import { Fragment, useState, useEffect } from 'react';
import ActivityBar from './ActivityBar';
import ActivityPanel from './ActivityPanel';
// import useKeyBinding from '@/keybindings';

const dummyActivityObject: { [key: string]: { icon: string; title: string; webviewHTML: string } } = {
  "activity-4": {
    "icon": "https://via.placeholder.com/15",
    "title": "Activity 4",
    "webviewHTML": "<h1>Activity 4</h1>"
  },
  "activity-5": {
    "icon": "https://via.placeholder.com/15",
    "title": "Activity 5",
    "webviewHTML": "<h1>Activity 5</h1>"
  }
};

export default function PrimaryActivityBarAndPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activePanelId, setActivePanelId] = useState<null | string>(null);
  const [activeWebviewHTML, setActiveWebviewHTML] = useState("");

  // useKeyBinding({
  //   ctrlKey: true,
  //   key: "b",
  //   callback: () => {
  //     setIsPanelOpen((prev) => !prev);
  //   }
  // });

  useEffect(() => {
    if (activePanelId) {
      setActiveWebviewHTML(dummyActivityObject[activePanelId].webviewHTML);
    }
  }, [activePanelId]);

  console.log("activePanelId", activePanelId);
  console.log("activeWebviewHTML", activeWebviewHTML);

  return (
    <Fragment>
      <ActivityBar 
        isPanelOpen={isPanelOpen} 
        setIsPanelOpen={setIsPanelOpen}
        activePanelId={activePanelId}
        setActivePanelId={setActivePanelId}
        activities={dummyActivityObject}
      />
      <ActivityPanel 
        isPanelOpen={isPanelOpen} 
        setIsPanelOpen={setIsPanelOpen} 
        webviewHTML={activeWebviewHTML}      
      />
    </Fragment>
  );
}