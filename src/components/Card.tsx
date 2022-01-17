import Link from "next/link";

interface ICardProps {
  children: string;
  path: string;
}

export default function Card({ children: description, path }: ICardProps) {
  return (
    <div className="flex items-center justify-center w-36 h-36 mr-2 border-2 rounded-lg shadow-md bg-blue-400">
      <Link href={path}>
        <a className="font-semibold text-lg text-white text-center">{description}</a>
      </Link>
    </div>
  );
}
