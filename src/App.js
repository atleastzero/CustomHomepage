import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Corkboard from './containers/Corkboard/Corkboard';
import CustomDragLayer from './CustomDragLayer'

class App extends Component {
  render() {
    return (
      <div>
        <DndProvider backend={Backend}>      
          <Corkboard />
          <CustomDragLayer />
        </DndProvider>
      </div>
    );
  }
}

export default App;
