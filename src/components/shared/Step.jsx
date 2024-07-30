import { FiCheck } from "react-icons/fi";

const Step = ({ checked,current, title ,count}) => {
  return (
    <div className="space-y-[16px]   flex flex-col items-center">
      <div className={`w-[40px] h-[40px] relative z-30  ${!checked ? 'bg-[#FF9C72]' : 'bg-white'} rounded-full border-[0.5px] flex items-center justify-center border-[#FF9C72]`}>
        {checked ? (
          <FiCheck className="w-[24px] h-[24px] text-[#FF9C72]" />
        ) : (
            <p className={`font-semibold font-poppin ${!checked ? 'text-white' : 'text-[#FF9C72]'}`}>{count}</p>
        )}
      </div>
      <h5
        className={`text-xs font-poppin text-center ${current && "font-bold"}`}
      >
       {title}
      </h5>
    </div>
  );
};

export default Step;
