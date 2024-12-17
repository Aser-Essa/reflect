// eslint-disable-next-line react/prop-types
function SectionContainer({ styles, id, children }) {
  return (
    <div className={`relative flex flex-col items-center ${styles}`} id={id}>
      {children}
    </div>
  );
}

export default SectionContainer;
