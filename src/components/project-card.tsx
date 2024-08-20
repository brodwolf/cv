import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  role: readonly string[];
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, role, link }: Props) {
  return (
    <Card className="flex flex-col w-full  overflow-hidden border border-muted p-3 group">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 group-hover:underline"
              >
                {title}{" "}
                <span className="flex-shrink-0 h-2 w-2 ml-1 mt-0.5 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <div className="mt-2 flex flex-wrap gap-2 gap-x-2">
          {role.map((role) => (
            <Badge
              className="px-2 py-0 text-xs"
              variant="default"
              key={role}
            >
              {role}
            </Badge>
          ))}
          {tags.map((tag) => (
            <Badge
              className="px-2 py-0 text-xs"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
