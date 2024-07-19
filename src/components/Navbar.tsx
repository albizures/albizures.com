import clsx from 'clsx';
import React from 'react';
import { SITE } from '../config';
import { Icons } from './Icons';

type NavbarProps = {
	activePage?: 'posts' | 'tags' | 'search' | 'projects';
};

export function Navbar(props: NavbarProps) {
	const { activePage } = props;
	return (
		<nav
			id="nav-menu"
			className="flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"
		>
			<button
				className="hamburger-menu self-end p-2 sm:hidden"
				aria-label="Toogle Menu"
				aria-expanded="false"
				aria-controls="menu-items"
			>
				<span className="sr-only">Toogle Menu</span>
				<Icons.Menu className="menu-open h-6 w-6" />
				<Icons.Close className="menu-close h-6 w-6" />
			</button>
			<NavbarList>
				{/* <NavbarItem>
					<LinkButton
						href="/posts"
						title="Posts"
						isActive={activePage === 'posts'}
					/>
				</NavbarItem>
				<NavbarItem className="col-span-1">
					<LinkButton
						href="/search"
						isActive={activePage === 'search'}
						ariaLabel="search"
						title="Search"
					>
						<Icons.Search className="inline-block h-7 w-7" />
					</LinkButton>
				</NavbarItem> */}
				<NavbarItem className="col-span-1">
					{SITE.lightAndDarkMode && (
						<button
							id="theme-btn"
							className="p-3 hover:text-primary sm:p-1"
							title="Toggles light & dark"
							aria-label="auto"
							aria-live="polite"
						>
							<Icons.Moon
								className="inline-block h-6 w-6 scale-125 hover:rotate-12 sm:scale-100"
								id="moon-svg"
							/>
							<Icons.Sun
								className="inline-block h-6 w-6 scale-125 hover:rotate-12 sm:scale-100"
								id="sun-svg"
							/>
						</button>
					)}
				</NavbarItem>
			</NavbarList>
		</nav>
	);
}

type LinkButtonProps = {
	href: string;
	title: string;
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	ariaLabel?: string;
	isActive?: boolean;
};

function LinkButton(props: LinkButtonProps) {
	const {
		disabled = false,
		href,
		className,
		title,
		ariaLabel = title,
		children = title,
		isActive = false,
	} = props;

	const classNames = clsx(
		'group inline-block',
		className,
		isActive && 'text-primary',
	);
	return (
		<a
			href={disabled ? '#' : href}
			tabIndex={disabled ? -1 : 0}
			className={classNames}
			aria-label={ariaLabel}
			title={title}
			aria-disabled={disabled}
		>
			{children}
		</a>
	);
}

type NavbarItemProps = {
	className?: string;
	children: React.ReactNode;
};

function NavbarItem(props: NavbarItemProps) {
	const { children, className } = props;
	return (
		<li
			className={clsx('col-span-2 flex items-center justify-center', className)}
		>
			{children}
		</li>
	);
}

type NavbarListProps = {
	children: React.ReactNode;
};

function NavbarList(props: NavbarListProps) {
	const { children } = props;
	return (
		<ul
			id="menu-items"
			className="mt-4 grid hidden w-44 grid-cols-2 grid-rows-4 gap-x-2 gap-y-2 sm:ml-0 sm:mt-0 sm:flex sm:w-auto sm:gap-x-5 sm:gap-y-0"
		>
			{children}
		</ul>
	);
}
