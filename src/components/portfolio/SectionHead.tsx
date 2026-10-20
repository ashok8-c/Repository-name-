
type SectionHeadProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHead({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadProps) {
  return (
    <div className="mb-12">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#9aa4b5]">
        <span className="text-[#65e6ee]">{number}</span>
        <span>{eyebrow}</span>
      </p>

      <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#f2f4f8] md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aab4c4] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
