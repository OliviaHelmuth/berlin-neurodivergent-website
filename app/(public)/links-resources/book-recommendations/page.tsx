import { Container } from "@/components/ui/Container";

export const metadata = { title: "Book Recommendations" };

const books = [
  { title: "Unmasking Autism", author: "Devon Price" },
  { title: "Divergent Mind", author: "Jenara Nerenberg" },
  { title: "Empire of Normality", author: "Robert Chapman" },
  { title: "How to Keep House While Drowning", author: "KC Davis" },
];

export default function BookRecommendationsPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Book Recommendations</h1>
      <p className="mb-8 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
        Titles the community recommends. Personal review blurbs from the org should replace this
        placeholder list before launch — book reviews here are original community writing, not to
        be copied from elsewhere.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {books.map((book) => (
          <li
            key={book.title}
            className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800"
          >
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{book.title}</p>
            <p className="text-zinc-500 dark:text-zinc-400">{book.author}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
