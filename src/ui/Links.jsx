// eslint-disable-next-line react/prop-types
function Links({ title, children }) {
  return (
    <>
      <ul className="flex h-[221px] w-[210px] flex-col gap-5">
        <li className="text-sm font-medium">{title}</li>
        {children}
      </ul>
    </>
  );
}

export default Links;
