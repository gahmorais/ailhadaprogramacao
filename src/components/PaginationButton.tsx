interface IPaginationButtonProps {
  onButtonClick: (url: string) => void;
  url: string;
  children: string;
}

export default function PaginationButton({
  onButtonClick,
  children: description,
  url,
}: IPaginationButtonProps) {
  function handleClick() {
    onButtonClick(url);
  }
  return (
    <button
      className="bg-blue-400 p-1 w-36 text-center rounded"
      onClick={handleClick}
    >
      {description}
    </button>
  );
}
