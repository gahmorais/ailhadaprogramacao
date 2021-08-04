import { capitalFirstLetter } from "../helpers/formatString";

interface IStatsBarProps {
  children: string;
  value: number;
  initialColor: string;
  finalColor: string;
}

function getColor(stat: string): string {
  let color = "";
  switch (stat) {
    case "hp":
      color = "red";
      break;
    case "attack":
      color = "blue";
      break;
    case "defense":
      color = "yellow";
      break;
    case "special-attack":
      color = "purple";
      break;
    case "special-defense":
      color = "green";
      break;
    case "speed":
      color = "pink";
      break;
  }
  return color
}

export default function StatsBar({
  children: stat,
  value,
}: IStatsBarProps) {
  return (
    <div
      className={`border-2 bg-gradient-to-r from-${getColor(stat)}-300 to-${getColor(stat)}-500 flex justify-between pl-1 pr-2`}
    >
      <span>{capitalFirstLetter(stat)}</span>
      <span>{value}</span>
    </div>
  );
}
