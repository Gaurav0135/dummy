import { certificates } from "@/data/certificates";
import { CertificateCard } from "./CertificateCard";
import { Carousel } from "./Carousel";

export function Certifications() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
          Certifications
        </span>
        <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Recent Certificates</h2>
      </div>

      <Carousel
        ariaLabel="Certificates carousel"
        items={certificates.map((c, i) => (
          <CertificateCard key={i} cert={c} />
        ))}
      />
    </section>
  );
}
