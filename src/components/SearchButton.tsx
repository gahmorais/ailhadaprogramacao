interface IPaginationButtonProps {
    onButtonClick: () => void;
    children: string;
  }
  
  export default function PaginationButton({
    onButtonClick,
    children: description,
  }: IPaginationButtonProps) {
    function handleClick() {
      onButtonClick();
    }
    return (
      <button
        className="bg-red-400 p-1 w-36 text-center text-white rounded"
        onClick={handleClick}
      >
        {description}
      </button>
    );
  }
  