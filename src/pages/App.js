import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from '../component/Navbar';

import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="sky" grayColor="sand" radius="large" scaling="95%">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
          </Theme>
        </ThemeProvider>
      </body>
    </Router>
  );
}

export default App;
