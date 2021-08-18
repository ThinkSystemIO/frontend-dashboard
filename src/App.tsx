import React, { useState } from 'react';
import "./App.css";
import DashboardModal from './Components/DashboardModal';
import ThemeFab from './Components/Fab';
import Layout from './Components/Layout';
import { DARK, LIGHT, Theme } from './Styles/Colors';


const App = () => {
  const [theme, setTheme] = useState<Theme>(DARK)
  const toggleTheme = () => setTheme(theme === LIGHT ? DARK : LIGHT)

  const [dialogOpen, setDialogOpen] = useState(false)
  const toggleModal = () => setDialogOpen(open => !open)

  return (
    <div key={theme}>
      <Layout theme={theme} onClick={toggleModal} />
      <DashboardModal theme={theme} dialogOpen={dialogOpen} toggleModal={toggleModal} />
      <ThemeFab theme={theme} onClick={toggleTheme} />
    </div>
  );
}

export default App;
