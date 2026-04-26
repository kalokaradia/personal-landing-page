import { useEffect, useState } from "react";
import ArrowUpRight from "./components/ArrowUpRight";
import CtaPrimary from "./components/CtaPrimary";
import CtaSecondary from "./components/CtaSecondary";
import Dot from "./components/Dot";
import GithubIcon from "./components/GithubIcon";
import NavLink from "./components/NavLink";
import ThemeToggle from "./components/ThemeToggle";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const GITHUB_URL = "https://github.com/kalokaradia";
const INSTAGRAM_URL = "https://instagram.com/kalokaradia";
const LINKEDIN_URL =
	"https://www.linkedin.com/in/kaloka-radia-nanda-b3ab73366/";

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Home() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const shouldBeDark = stored === "dark" || (!stored && prefersDark);

		document.documentElement.classList.toggle("dark", shouldBeDark);
		setIsDark(shouldBeDark);
	}, []);

	const toggleTheme = () => {
		setIsDark((prev) => {
			const next = !prev;
			document.documentElement.classList.toggle("dark", next);
			localStorage.setItem("theme", next ? "dark" : "light");
			return next;
		});
	};

	return (
		<div className="relative z-10 mx-auto flex min-h-screen max-w-[640px] flex-col px-7 py-12">
			{/* ── HEADER ── */}
			<header className="flex items-center justify-between mb-20 animate-fade-up-0">
				<span className="font-sans text-2xs font-bold uppercase tracking-[0.1em] text-primary-300">
					KRN
				</span>
				<nav className="flex items-center gap-6">
					<NavLink href={INSTAGRAM_URL}>Instagram</NavLink>
					<NavLink href={LINKEDIN_URL}>LinkedIn</NavLink>
					<ThemeToggle onToggle={toggleTheme} isDark={isDark} />
				</nav>
			</header>

			{/* ── HERO ── */}
			<main className="flex-1 animate-fade-up-1">
				{/* Status pill */}
				<div className="inline-flex items-center gap-2 text-2xs font-semibold uppercase tracking-widest text-primary-300 border border-border-100 rounded-full px-3 py-1 mb-8">
					<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4caf50] animate-status-pulse" />
					Student · Programmer
				</div>

				{/* Avatar + name */}
				<div className="flex items-center gap-4 mb-8">
					<div className="w-14 h-14 rounded-full flex items-center justify-center font-serif text-2xl italic select-none bg-bg-200 border border-border-200 text-accent">
						K
					</div>
					<div className="flex flex-col">
						<span className="text-base font-medium tracking-tight text-primary-100">
							Kaloka Radia Nanda
						</span>
						<span className="text-xs tracking-wider text-primary-300">
							Purworejo, Indonesia
						</span>
					</div>
				</div>

				{/* Headline */}
				<h1 className="font-serif font-normal leading-[1.1] tracking-tight text-primary-100 mb-8 text-[clamp(2.5rem,7vw,3.5rem)]">
					Building software,
					<br />
					tools, and <em className="text-accent not-italic">experiments</em>
					<br />
					on the web.
				</h1>

				{/* Separator */}
				<div className="h-px w-full bg-border-100 mb-8" aria-hidden="true" />

				{/* Body */}
				<p className="text-[15px] font-light leading-relaxed text-primary-200 mb-10 max-w-[520px]">
					A student focused on{" "}
					<strong className="font-medium text-primary-100">
						software engineering
					</strong>{" "}
					— I enjoy logic, mathematics, and building things that actually run.
					From tools to experiments, each project helps me understand how{" "}
					<strong className="font-medium text-primary-100">
						real systems are designed.
					</strong>
				</p>

				{/* CTAs */}
				<div className="flex flex-wrap items-center gap-5 animate-fade-up-2">
					<CtaPrimary href={GITHUB_URL}>
						<GithubIcon />
						View projects
						<ArrowUpRight />
					</CtaPrimary>
					<Dot />
					<CtaSecondary href={INSTAGRAM_URL}>Instagram</CtaSecondary>
					<Dot />
					<CtaSecondary href={LINKEDIN_URL}>LinkedIn</CtaSecondary>
				</div>
			</main>

			{/* ── FOOTER ── */}
			<footer className="mt-24 flex flex-wrap items-center justify-between gap-4 animate-fade-up-2">
				<span className="text-xs tracking-wider text-primary-300">
					© {new Date().getFullYear()} Kaloka Radia Nanda
				</span>
				<span className="text-[10px] uppercase tracking-widest text-primary-300 px-2.5 py-1 rounded-sm border border-border-100">
					Open to opportunities
				</span>
			</footer>
		</div>
	);
}
