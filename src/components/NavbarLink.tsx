import Link from "next/link";

interface INavbarLogoProps {
  children: string;
  path: string;
}

export default function NavbarLink({
  children: description,
  path,
}: INavbarLogoProps) {
  return (
    <Link
      className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-red font-semibold text-lg text-white"
      href={path}
    >
      {description}
    </Link>
  );
}
