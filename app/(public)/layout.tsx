import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialRail } from "@/components/layout/SocialRail";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SocialRail />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
