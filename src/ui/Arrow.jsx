// eslint-disable-next-line react/prop-types
function Arrow({ children }) {
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-[4px] border border-[#ffffff0f] text-[#efedfd52]"
      style={{
        backgroundImage: "linear-gradient(to bottom , #ffffff00 , #ffffff1f)",
        boxShadow:
          "#ffffff14 0px 2px 0px, inset 0 0 8px 1px hsl(0deg 0% 100% / 4%)",
      }}
    >
      {children}
    </div>
  );
}

export default Arrow;
