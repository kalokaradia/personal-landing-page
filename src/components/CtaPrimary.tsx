import type { ReactNode } from "react";

export default function CtaPrimary({
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
			className="group inline-flex items-center gap-2 bg-primary-100 text-bg-100 text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-[4px] no-underline transition-all duration-200 hover:opacity-85 hover:-translate-y-px active:translate-y-0"
		>
			{children}
		</a>
	);
}
