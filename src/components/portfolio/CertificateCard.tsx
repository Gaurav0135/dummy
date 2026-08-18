import { Award, ExternalLink } from "lucide-react";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <div className="w-full h-full flex flex-col glass rounded-3xl p-4 card-glow">
      <div
        className={`relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${cert.gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
        <div className="absolute inset-0 grid place-items-center">
          <Award className="h-12 w-12 text-white/90 drop-shadow-lg" />
        </div>
      </div>
      <div className="p-2 pt-4">
        <h4 className="font-semibold">{cert.name}</h4>
        <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
        <a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs font-semibold hover:scale-[1.02] transition"
        >
          <ExternalLink size={14} /> View Certificate
        </a>
      </div>
    </div>
  );
}
