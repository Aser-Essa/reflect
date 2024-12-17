// eslint-disable-next-line react/prop-types
function HalfLine({ direction, center }) {
  return (
    <>
      {direction && (
        <div
          className="flex h-full min-w-[1px] items-center"
          style={{
            backgroundImage: `linear-gradient(to ${direction}, #ffffff17, transparent`,
          }}
        >
          {center && (
            <div className="h-4 w-full bg-[rgba(255,255,255,0.24)]"></div>
          )}
        </div>
      )}
    </>
  );
}

export default HalfLine;
