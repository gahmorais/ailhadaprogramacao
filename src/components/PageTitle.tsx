interface IPageTitleProps {
  children: string;
}

export default function PageTitle({ children: title }: IPageTitleProps) {
  return <h1 className="font-semibold text-2xl text-center">{title}</h1>;
}
