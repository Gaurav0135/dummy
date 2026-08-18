export function Footer() {
  const portfolioLastUpdated = "August 2026";

  return (
    <footer className="relative py-8">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-1.5">
        <p className="text-xs text-muted-foreground/80">© 2026 Saurav Patel</p>
        <p className="text-xs text-muted-foreground/65">Designed & Developed by Saurav Patel</p>
        <p className="text-[11px] text-muted-foreground/50">Last updated: {portfolioLastUpdated}</p>
      </div>
    </footer>
  );
}
