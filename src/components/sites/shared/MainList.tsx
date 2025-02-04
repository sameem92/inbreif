import { FC } from "react";

interface MainListProps {
  items: string[];
}

const MainList: FC<MainListProps> = ({ items }) => {
  return (
    <ul className="main-list">
      {items.map((item, index) => (
        <li key={index} className="listItem">
          <div className="icon">
            <div className="small-icon"></div>
          </div>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default MainList;
