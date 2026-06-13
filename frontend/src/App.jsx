import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Control from './components/Control';
import Analytics from './components/Analytics';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const props = { activePage, setActivePage };

  if (activePage === 'dashboard') return <Dashboard {...props} />;
  if (activePage === 'appliances') return <Control {...props} />;
  if (activePage === 'analytics') return <Analytics {...props} />;
}

export default App;