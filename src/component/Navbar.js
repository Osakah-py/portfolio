import React from 'react';
import classNames from "classnames";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../styles/Navbar.css'
import { CaretDownIcon } from "@radix-ui/react-icons";

function Navbar() {
    return (
        <NavigationMenu.Root className='NavigationMenuRoot'>
            <NavigationMenu.List className='NavigationMenuList'>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className='MainNavbarItem NavigationMenuLink'
                        href='#'>
                        Welcome
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item style={{position: 'relative'}}>
                    <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                    Engineering course <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className='List one'>
                            <ListItem href="https://stitches.dev/" title="Projects" />
                            <ListItem href="https://icons.radix-ui.com/" title="Productions" />
                        </ul>
                    </NavigationMenu.Content>
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

const ListItem = React.forwardRef(
    ({ className, children, title, ...props }, forwardedRef) => (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    className={classNames("ListItemLink", className)}
                    {...props}
                    ref={forwardedRef}
                >
                    <div className="ListItemHeading">{title}</div>
                    <p className="ListItemText">{children}</p>
                </a>
            </NavigationMenu.Link>
        </li>
    ),
);

export default Navbar;
