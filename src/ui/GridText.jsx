// eslint-disable-next-line react/prop-types
function GridText({ size, children }) {
  return (
    <p
      className={`font-roboto font-medium`}
      style={{
        background: "linear-gradient(to left, #E59CFF , #BA9CFF , #9CB2FF)",
        backgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "rgba(255, 255, 255, 0)",
        fontSize: size,
      }}
    >
      {children}
    </p>
  );
}

export default GridText;
