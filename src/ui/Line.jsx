// eslint-disable-next-line react/prop-types
function Line({ direction, full, gradDirection, bar, position, fill, styles }) {
  return (
    <>
      <div
        className={`flex overflow-hidden ${direction === "vertical" ? `h-[${fill}] w-[1px]` : `h-[1px] w-[${fill}] `} ${styles}`}
        style={{
          background: full
            ? "#ffffff17"
            : `linear-gradient(to ${gradDirection}, #ffffff17, transparent`,
        }}
      >
        {bar && (
          <div
            className={`absolute w-full bg-[rgba(255,255,255,0.24)] ${position}`}
          ></div>
        )}
      </div>
    </>
  );
}

export default Line;
