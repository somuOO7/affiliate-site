import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CategoryBarItem = ({ logo, title, selected, className, onClick }) => {
  return (
    <div
      className={`${className} flex space-x-1 items-center rounded-lg ${
        selected
          ? "bg-green-500 text-white border-green-500"
          : "border-slate-400"
      } border-x border-y px-2 py-1 cursor-pointer transition-all`}
      onClick={onClick}
    >
      {logo === "" && title === "" ? (
        <AdjustmentsHorizontalIcon className="text-black h-5" />
      ) : (
        <>
          <h1>{logo}</h1>
          <h1>{title}</h1>
        </>
      )}
      {selected && <XMarkIcon className="h-4" />}
    </div>
  );
};

export default CategoryBarItem;
