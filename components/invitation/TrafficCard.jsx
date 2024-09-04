import { forwardRef } from 'react';

const TrafficCard = forwardRef(function ({ children, icon, name }, ref) {
  return (
    <div
      ref={ref}
      className="flex py-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
    >
      <div className="mr-4">
        <div className="bg-[#f2eeee] w-[2.5rem] h-[2.5rem] rounded-full opacity-70 flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-[1.2rem] leading-[1.8rem] opacity-80 text-[#89757a]">
          {name}
        </p>
        <p className="text-[0.8rem] leading-[1.5rem] opacity-80 text-[#524548]">
          {children}
        </p>
      </div>
    </div>
  );
});

export default TrafficCard;
