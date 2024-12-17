/* eslint-disable react/prop-types */
import Comment from "./Comment";

function CommentsRow({ data }) {
  return (
    <div className="mb-6 flex h-[236px] items-center gap-6 max-sm:mb-4 max-sm:h-[186px] max-sm:gap-4 max-sm:px-4">
      {data?.map((user) => (
        <Comment key={user.id} user={user} />
      ))}
    </div>
  );
}

export default CommentsRow;
