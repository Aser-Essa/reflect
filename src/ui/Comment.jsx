/* eslint-disable react/prop-types */
function Comment({ user }) {
  return (
    <div
      className="h-full w-[480px] rounded-[16px] bg-[#ffffff03] px-7 py-6 max-sm:w-[calc(70vw-32px)]"
      style={{
        background:
          "linear-gradient(rgb(255 255 255 / 4%) 54%, rgba(255, 255, 255, 0.04) 100%), repeating-linear-gradient(150deg, rgba(122, 125, 255, 0.06), rgba(120, 123, 255, 0))",
      }}
    >
      <div className="flex items-center gap-4">
        <img src={user?.avatar} className="h-11 w-11 rounded-[50%]" />
        <div>
          <p className="font-medium">{user?.name}</p>
          <p className="text-nowrap text-sm text-[#efedfd99]">
            {user?.userName}
          </p>
        </div>
      </div>
      <p className="mt-6 h-[96px] overflow-hidden text-ellipsis text-[#efedfdb3] max-sm:mt-3 max-sm:h-[70px]">
        {user?.comments}
      </p>
    </div>
  );
}

export default Comment;
