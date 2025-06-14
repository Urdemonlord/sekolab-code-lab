
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Item = { label: string, href?: string };
export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav className="mb-6 flex items-center space-x-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center">
          {idx > 0 && <ChevronRight className="mx-1 w-4 h-4" />}
          {item.href ? (
            <Link to={item.href} className="hover:underline">{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
