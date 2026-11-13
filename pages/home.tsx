import ApiCard from "./ApiCard";
import apis from "../data/apis.json";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Explore my projects through technical overviews, API references, and
        request and response schemas.
      </p>
      {/* Add project cards in data/apis.json and navigation in zudoku.config.tsx.
          API references live in apis/<project>/openapi.yaml; Markdown overviews
          live in pages/api/<project>.md. */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {apis.map((api) => (
          <ApiCard key={api.href} {...api} />
        ))}
      </div>
    </main>
  );
}
