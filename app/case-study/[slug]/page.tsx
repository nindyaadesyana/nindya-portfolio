import { caseStudies, getCaseStudyBySlug } from "@/data/CaseStudies";
import { notFound } from "next/navigation";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | Nindya Desyana`,
    description: cs.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  return <CaseStudyClient cs={cs} />;
}
