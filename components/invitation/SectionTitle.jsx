import { forwardRef } from 'react';

const SectionTitle = forwardRef(function ({ koTitle, enTitle }, ref) {
  return (
    <h3
      ref={ref}
      className="opacity-0 text-center mb-8 translate-y-[20px] transition-all duration-500 ease-in"
    >
      <span className="text-[0.8rem] uppercase tracking-[3px] text-[#c2b2b2] font-crimson">
        {enTitle}
      </span>
      <br />
      <span className="text-[1.2rem]">{koTitle}</span>
    </h3>
  );
});

export default SectionTitle;
