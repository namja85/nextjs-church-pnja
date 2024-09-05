import { forwardRef } from 'react';

const AppointeeName = forwardRef(function AppointeeName({ duty, names }, ref) {
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
    >
      <h4 className="text-[1rem] font-[800] leading-[1.8rem] opacity-80 text-[#524548] text-center">
        {duty}
      </h4>
      <p className="text-[1rem] leading-[1.8rem] opacity-80 text-[#524548] text-center">
        {names.join(' ')}
      </p>
    </div>
  );
});

export default AppointeeName;
