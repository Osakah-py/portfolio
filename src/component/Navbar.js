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
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								title="LV2"
								href="/primitives/docs/overview/getting-started"
							>
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem title="LV3" href="/primitives/docs/guides/styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								title="JSP"
								href="/primitives/docs/guides/animation"
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="NavigationMenuLink"
						href="/sports"
					>
						Sport & other activities
					</NavigationMenu.Link>
				</NavigationMenu.Item>

                <NavigationMenu.Item>
					<NavigationMenu.Link
						className="NavigationMenuLink"
						href="https://github.com/radix-ui"
					>
						Career Development
					</NavigationMenu.Link>
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
