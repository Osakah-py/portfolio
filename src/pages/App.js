import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from '../component/Navbar';

import Home from './Home';
import Projects from './Projects';
import Education from './Education';
import Sports from './Sports';

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
                <Route path='/education' element={<Education />} />
                <Route path='/sports' element={<Sports />} />
            </Routes>
          </Theme>
        </ThemeProvider>
      </body>
    </Router>
  );
}

export default App;
