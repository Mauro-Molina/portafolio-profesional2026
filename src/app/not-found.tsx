import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-primary">404</p>
      <h1 className="mt-4 font-heading text-4xl text-white md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[16px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
