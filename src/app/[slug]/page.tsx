import { redirect } from "next/navigation";
import { getAllSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/**
 * Legacy slug redirect: routes /[slug] directly into the 2-column
 * documentation interface at /dashboard/[slug].
 */
export default async function LegacySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/dashboard/${slug}`);
}
