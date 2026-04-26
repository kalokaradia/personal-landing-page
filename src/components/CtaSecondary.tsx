import type { ReactNode } from "react";

export default function CtaSecondary({
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
			className="text-[13px] font-normal tracking-wide text-primary-300 hover:text-primary-100 transition-colors duration-200 no-underline"
		>
			{children}
		</a>
	);
}
