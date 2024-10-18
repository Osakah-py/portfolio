import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import Header from './Header';
//import Navbar from './Navbar';
import Navbar from './Navbar';

function App() {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="sky" grayColor="sand" radius="large" scaling="95%">
            <Navbar />
            <Header />
            <p>Test</p>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
