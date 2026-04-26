import type { ReactNode } from "react";

export default function NavLink({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className="nav-link text-2xs font-normal tracking-wider text-primary-300 hover:text-primary-100 transition-colors duration-200 no-underline"
		>
			{children}
		</a>
	);
}
