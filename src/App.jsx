import { useState } from 'react';
import './App.css';

import {
  Button, Modal,
  Tabs, Tab
} from 'carbon-components-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hi</h1>
      <Button>Hi</Button>
    </>
  );
}

export default App;
