import { site } from "@/content/site";

export function DonateButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700 ${className}`}
    >
      Donate
    </a>
  );
}
