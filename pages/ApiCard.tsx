type ApiCardProps = {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
};

function ApiCard({
  title,
  description,
  href,
  linkLabel = "Explore API",
}: ApiCardProps) {
  return (
    <a href={href} className="rounded-lg border p-6 transition hover:bg-muted">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <span className="mt-4 inline-block font-medium">{linkLabel} →</span>
    </a>
  );
}

export default ApiCard;
