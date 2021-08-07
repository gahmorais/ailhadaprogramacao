interface ITitleProps {
  children: string;
}

export default function Title({ children: title }: ITitleProps) {
  return <span className="font-semibold text-lg text-gray-700">{title}</span>;
}
