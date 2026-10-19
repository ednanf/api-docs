import { Link } from "zudoku/components";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Explore the APIs behind my projects, including endpoint references and
        request and response schemas.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href="/api/school-api"
          className="rounded-lg border p-6 transition hover:bg-muted"
        >
          <h2 className="text-xl font-semibold">School API</h2>
          <p className="mt-2 text-muted-foreground">
            API reference for the school management system.
          </p>
          <span className="mt-4 inline-block font-medium">Explore API →</span>
        </a>

        <a
          href="/api/petstore"
          className="rounded-lg border p-6 transition hover:bg-muted"
        >
          <h2 className="text-xl font-semibold">Petstore (Example)</h2>
          <p className="mt-2 text-muted-foreground">
            Example API reference, kept temporarily for testing.
          </p>
          <span className="mt-4 inline-block font-medium">Explore API →</span>
        </a>
      </div>
    </main>
  );
}
