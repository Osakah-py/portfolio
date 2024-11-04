import React, {useEffect, useState} from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
	  const handleScroll = event => {
		setScrollTop(window.scrollY);
	  };
  
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

	return (
		<NavigationMenu.Root className={`NavigationMenuRoot ${scrollTop > 100 ? 'NavigationScrolled' : ''}`}>
			<NavigationMenu.List className="NavigationMenuList">

            <NavigationMenu.Item>
					<NavLink
						className="NavigationMenuLink"
						to="/"
					>
						Welcome
					</NavLink>
				</NavigationMenu.Item>
				<NavLink
						className="NavigationMenuLink"
						to="/projects"
					>
						Projects
					</NavLink>
				<NavigationMenu.Item>

				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
                        International Mobility <CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								title="PCE"
								href="/primitives/docs/overview/introduction"
							>
								???
							</ListItem>
							<ListItem
								title="LV2"
								href="/primitives/docs/overview/getting-started"
							>
								I chose Chinese as LV2 
							</ListItem>
							<ListItem title="Other" href="/primitives/docs/guides/styling">
								I speak Romanian
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavLink
						className="NavigationMenuLink"
						to="/sports"
					>
						Sport & other activities
					</NavLink>
				</NavigationMenu.Item>

                <NavigationMenu.Item>
					<NavLink
						className="NavigationMenuLink"
						to="/education"
					>
						Career Development
					</NavLink>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="NavigationMenuIndicator">
					<div className="Arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="ViewportPosition">
				<NavigationMenu.Viewport className="NavigationMenuViewport" />
			</div>
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
