import { ArrowUpRight, Github, Moon, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

const GITHUB_URL = "https://github.com/kalokaradia";
const INSTAGRAM_URL = "https://instagram.com/kalokaradia";
const LINKEDIN_URL =
	"https://www.linkedin.com/in/kaloka-radia-nanda-b3ab73366/";

export default function Home() {
	// dark mode
	const [isDark, setIsDark] = useState(false);

	const darkThemeToggle = () => {
		const html = document.documentElement;
		html.classList.toggle("dark");

		if (html.classList.contains("dark")) {
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		} else {
			localStorage.setItem("theme", "light");
			setIsDark(false);
		}
	};

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#FAF6EE] text-zinc-800 dark:bg-[#0F0F12] dark:text-zinc-200 transition-color duration-300 ease-in-out">
			{/* subtle grid background */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.04] transition-opacity duration-300 ease-in-out dark:opacity-[0.06]"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.4) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* soft gradient glow */}
			<div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-rose-300/40 transition-color duration-300 ease-in-out dark:bg-rose-500/10 blur-3xl z-0" />
			<div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 transition-color duration-300 ease-in-out  dark:bg-sky-500/10 blur-3xl z-0" />
			<div className="pointer-events-none absolute left-1/2 top-32 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-300/30 transition-color duration-300 ease-in-out  dark:bg-violet-500/10 blur-2xl z-0" />

			<div className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col px-6 py-10 sm:max-w-2xl">
				{/* header */}
				<header className="flex md:flex-row flex-col items-center justify-between text-sm">
					<span className="font-medium text-lg mb-2 text-zinc-900 transition-color duration-300 ease-in-out dark:text-zinc-100">
						Kaloka Radia Nanda
					</span>

					<div className="flex gap-4">
						<a
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-color duration-300 ease-in-out"
						>
							Instagram
							<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>

						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-color duration-300 ease-in-out"
						>
							LinkedIn
							<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>

						<button
							type="button"
							onClick={darkThemeToggle}
							className={`
    relative inline-flex h-9 w-[68px] items-center rounded-full px-1.5
    backdrop-blur-md border border-zinc-300 dark:border-zinc-200/40 dark:border-zinc-700/40
    bg-zinc-100 dark:bg-zinc-800/40
    transition-all duration-300 ease-in-out delay-75
  `}
						>
							<span
								className={`
      absolute flex h-7 w-7 items-center justify-center rounded-full
      transition-all duration-300 ease-in-out delay-75
      ${
				isDark
					? "translate-x-[32px] bg-zinc-900 text-blue-400"
					: "translate-x-0 bg-zinc-100 text-amber-400"
			}
      shadow-sm
    `}
							>
								{isDark ? <Moon size={14} /> : <SunDim size={14} />}
							</span>
						</button>
					</div>
				</header>

				{/* main hero */}
				<main className="flex flex-1 items-center">
					<section className="max-w-xl">
						<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 transition-color duration-300 ease-in-out">
							Student • Programmer
						</p>

						<h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-900 transition-color duration-300 ease-in-out dark:text-zinc-100 sm:text-5xl">
							I build small software, tools, and experiments on the web.
						</h1>

						<p className="mt-5 text-base leading-7 text-zinc-600 transition-color duration-300 ease-in-out dark:text-zinc-300">
							I'm Kaloka, a student focused on learning software engineering. I
							enjoy logic, mathematics, and building things that actually run —
							from small web apps to developer tools and coding experiments.
							Most of what I build are learning projects, but each one helps me
							understand how real software systems are designed and built.
						</p>

						<div className="mt-6 flex items-left flex-col *:w-fit md:flex-row md:items-center gap-4">
							<a
								href={GITHUB_URL}
								target="_blank"
								rel="noreferrer"
								className="group inline-flex items-center gap-2 rounded-full 
								bg-zinc-900 text-[#FAF6EE] hover:bg-zinc-800 
								dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 
								px-5 py-2 text-sm font-medium transition-color ease-in-out duration-300"
							>
								<Github className="h-4 w-4" />
								View my projects
								<ArrowUpRight className="h-4 w-4 transition-transform ease-in-out duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>

							<span className="text-xs ml-1 md:ml-0 text-zinc-500 transition-color duration-300 ease-in-out dark:text-zinc-400">
								Experiments, tools, and learning projects.
							</span>
						</div>
					</section>
				</main>

				{/* footer */}
				<footer className="text-xs text-zinc-500 transition-color duration-300 ease-in-out dark:text-zinc-400">
					© {new Date().getFullYear()} Kaloka Radia Nanda
				</footer>
			</div>
		</div>
	);
}
