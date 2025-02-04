import { FC } from "react";

interface BadgesListProps {
  badges: string[];
}

const BadgesList: FC<BadgesListProps> = ({ badges }) => {
  return (
    <ul className="badges">
      {badges.map((item, index) => (
        <li key={index} className="badge">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
