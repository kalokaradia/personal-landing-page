export default function ThemeToggle({
	onToggle,
	isDark,
}: {
	onToggle: () => void;
	isDark: boolean;
}) {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark}
			className="theme-toggle"
		/>
	);
}
