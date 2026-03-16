import { ArrowUpRight, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/kalokaradia";
const INSTAGRAM_URL = "https://instagram.com/kalokaradia";
const LINKEDIN_URL =
	"https://www.linkedin.com/in/kaloka-radia-nanda-b3ab73366/";

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#FAF6EE] text-zinc-800">
			{/* subtle grid background */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage:
						"linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* soft gradient glow */}
			<div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl z-0" />
			<div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl z-0" />
			<div className="pointer-events-none absolute left-1/2 top-32 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-300/30 blur-2xl z-0" />

			<div className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col px-6 py-10 sm:max-w-2xl">
				{/* header */}
				<header className="flex items-center justify-between text-sm">
					<span className="font-medium text-zinc-900">Kaloka Radia Nanda</span>

					<div className="flex gap-4">
						<a
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-1 text-zinc-600 hover:text-zinc-900 transition"
						>
							Instagram
							<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>

						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-1 text-zinc-600 hover:text-zinc-900 transition"
						>
							LinkedIn
							<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
				</header>

				{/* main hero */}
				<main className="flex flex-1 items-center">
					<section className="max-w-xl">
						<p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
							Student • Programmer
						</p>

						<h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
							I build small software, tools, and experiments on the web.
						</h1>

						<p className="mt-5 text-base leading-7 text-zinc-600">
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
								className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-[#FAF6EE] hover:bg-zinc-800 transition"
							>
								<Github className="h-4 w-4" />
								View my projects
								<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>

							<span className="text-xs ml-1 md:ml-0 text-zinc-500">
								Experiments, tools, and learning projects.
							</span>
						</div>
					</section>
				</main>

				{/* footer */}
				<footer className="text-xs text-zinc-500">
					© {new Date().getFullYear()} Kaloka Radia Nanda
				</footer>
			</div>
		</div>
	);
}
