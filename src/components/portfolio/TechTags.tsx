
type TechTagsProps = {
  tags: readonly string[];
};

export default function TechTags({ tags }: TechTagsProps) {
  return (
    <ul
      aria-label="Technologies used"
      className="flex flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-[#65e6ee]/20 bg-[#65e6ee]/5 px-2.5 py-1.5 font-mono text-[11px] text-[#c5d9e0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#65e6ee]/60 hover:bg-[#65e6ee]/10 hover:text-[#65e6ee]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
