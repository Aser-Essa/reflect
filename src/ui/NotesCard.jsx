// eslint-disable-next-line react/prop-types
function NotesCard({ mainImage, image, title, paragraph }) {
  return (
    <>
      <div className="w-[468px] max-sm:w-full">
        <img
          src={`/${mainImage}`}
          className="h-[256px] w-[468px] max-sm:w-full"
        />
        <div className="p-8 pt-0">
          <img src={`/${image}`} className="mb-4 h-8 w-8" />
          <span className="font-medium">{title}</span>
          <span className="text-wrap text-[rgba(239,237,253,0.7)]">
            {` ${paragraph}`}
          </span>
        </div>
      </div>
    </>
  );
}

export default NotesCard;
