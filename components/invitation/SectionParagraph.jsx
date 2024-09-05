import { forwardRef } from 'react';

const SectionParagraph = forwardRef(function SectionParagraph(
  { children },
  ref,
) {
  return (
    <p
      ref={ref}
      className="text-[1rem] leading-[1.8rem] text-[#524548] text-center break-words whitespace-normal [word-wrap:break-word] [word-break:keep-all] opacity-0 translate-y-5 transition-all ease duration-500"
    >
      {children}
    </p>
  );
});

export default SectionParagraph;
