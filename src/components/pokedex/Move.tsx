interface IMoveProps {
  url: string;
  children: string;
}
export default function Move({ children: moveName, url }: IMoveProps) {
  return <span className="w-full">{moveName}</span>;
}
