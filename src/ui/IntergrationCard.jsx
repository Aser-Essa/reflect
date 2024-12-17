// eslint-disable-next-line react/prop-types
function IntergrationCard({ title, paragraph, icon }) {
  return (
    <div className="flex h-[220px] w-[468px] flex-col items-center justify-center max-sm:w-full">
      <img src={`/${icon}`} className="h-10" />
      <p className="mt-6 font-medium">{title}</p>
      <p className="mt-2 w-[275px] text-center text-[#efedfdb3]">{paragraph}</p>
    </div>
  );
}

export default IntergrationCard;
