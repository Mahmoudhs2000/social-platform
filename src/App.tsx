import './App.css';
import {Sidebar, Home,Suggestions} from './Components/index';
import { Box } from '@mui/material';

function App() {

  return (
    <Box className="flex bg-black">
      <Sidebar />
      <Home />
      <Suggestions />
    </Box>
  )
}

export default App
