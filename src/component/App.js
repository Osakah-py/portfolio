import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import Header from './Header';

function App() {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
            <Header />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
