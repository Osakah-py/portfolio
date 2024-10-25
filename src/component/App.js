import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

import Header from './Header';
import Navbar from './Navbar';
import CategoryPresentation from './CategoryPresentation';

import { categoryContent } from "../data/categoryContent";

function App() {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="sky" grayColor="sand" radius="large" scaling="95%">
            <Navbar />
            <Header />
            {categoryContent.map((cat) => 
              <CategoryPresentation 
              name={cat.name}
              description={cat.description}
              button={cat.button}
              id={cat.id} />
            )}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
