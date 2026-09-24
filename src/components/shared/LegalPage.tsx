import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  updatedOn: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ title, updatedOn, intro, sections }: LegalPageProps) {
  return (
    <div className="bg-white">
      <PageHeader title={title} description={`Last updated: ${updatedOn}`} />
      <div className="container py-10 md:py-14 max-w-3xl">
        <p className="text-sm text-ink-muted leading-relaxed mb-8">{intro}</p>
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-brand mb-2">{section.heading}</h2>
              <div className="text-sm text-ink-muted leading-relaxed [&>p]:mb-3">{section.body}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
