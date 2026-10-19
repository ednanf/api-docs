import ApiCard from "./ApiCard";
import apis from "../data/apis.json";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Explore the APIs behind my projects, including endpoint references and
        request and response schemas.
      </p>
      {/* NOTE: Add new projects' metadata in /data/apis.json, the openapi.yml
      files in apis/`project-name`/openapi.yml and register it in
      zudoku.config.tsx */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {apis.map((api) => (
          <ApiCard key={api.href} {...api} />
        ))}
      </div>
    </main>
  );
}
