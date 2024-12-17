// eslint-disable-next-line react/prop-types
function ListItem({ children }) {
  return (
    <li className="flex items-center gap-3 max-sm:gap-2 max-sm:text-sm">
      <img src="list-dot.png" className="h-6 w-6" />
      <p className="text-[#F4F0FF]">{children}</p>
    </li>
  );
}

export default ListItem;
