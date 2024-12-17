// eslint-disable-next-line react/prop-types
function List({ children }) {
  return (
    <ul className="ml-auto mt-[28px] grid w-fit grid-cols-2 gap-x-[60px] gap-y-6 max-sm:mx-auto max-sm:mt-3 max-sm:w-[88%] max-sm:gap-x-5 max-sm:gap-y-5">
      {children}
    </ul>
  );
}

export default List;
