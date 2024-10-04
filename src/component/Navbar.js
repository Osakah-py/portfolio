import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

import '../styles/Navbar.css'

function Navbar() {
  return (
      <NavigationMenu.Root className='NavigationMenuRoot'>
		<NavigationMenu.List className='NavigationMenuList'>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger className='NavigationMenuTrigger'/>
				<NavigationMenu.Content className="NavigationMenuContent">
                    <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            Career Developement
                    </NavigationMenu.Link>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
            
			<NavigationMenu.Item>
            <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            Welcome
                    </NavigationMenu.Link>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
            <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            Engineering course
                    </NavigationMenu.Link>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
            <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            International Mobility
                    </NavigationMenu.Link>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
            <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            Sport & other activities
                    </NavigationMenu.Link>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
            <NavigationMenu.Link 
                        className='NavigationMenuLink'
                        href='#'>
                            Career Developement
                    </NavigationMenu.Link>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger />
				<NavigationMenu.Content>
					<NavigationMenu.Sub>
						<NavigationMenu.List />
						<NavigationMenu.Viewport />
					</NavigationMenu.Sub>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Indicator />
		</NavigationMenu.List>

		<NavigationMenu.Viewport />
	</NavigationMenu.Root>
  );
};

export default Navbar;
