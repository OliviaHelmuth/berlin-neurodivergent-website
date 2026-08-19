import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata = { title: "Impressum", robots: { index: false, follow: false } };

export default function ImpressumPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Impressum</h1>
      <PlaceholderNotice page="Impressum" />
      <div className="max-w-xl space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
        <p className="text-zinc-500 dark:text-zinc-400">
          Required under §5 TMG / §18 MStV. The current live site has no Impressum at all — the
          fields below must be filled in with real information before this page can go live.
        </p>
        <dl className="space-y-3">
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">Responsible entity / legal name</dt>
            <dd>[to be supplied by the org — legal name and form, e.g. e.V., informal group, etc.]</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">Address</dt>
            <dd>[to be supplied — postal address]</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">Contact</dt>
            <dd>[to be supplied — email / phone tied to legal responsibility]</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">Register entry (if applicable)</dt>
            <dd>[Vereinsregister number, if formally registered — or state &quot;not formally registered&quot;]</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">VAT ID (if applicable)</dt>
            <dd>[to be supplied, or state not applicable]</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">Person responsible for content (§18 Abs. 2 MStV)</dt>
            <dd>[name and address]</dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
