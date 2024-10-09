import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import Header from './Header';
//import Navbar from './Navbar';
import NavigationMenuDemo from './Navbar_example';

function App() {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="sky" grayColor="sand" radius="large" scaling="95%">
            <NavigationMenuDemo />
            <Header />
            <p>Test</p>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
