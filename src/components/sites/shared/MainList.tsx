import { useTranslations } from "next-intl";
import { FC } from "react";

interface MainListProps {
  items: string[];
}

const MainList: FC<MainListProps> = ({ items }) => {
  const t = useTranslations("InformationalReservation");
  return (
    <ul className="main-list">
      {items.map((item, index) => (
        <li key={index} className="listItem">
          <div className="icon">
            <div className="small-icon"></div>
          </div>
          <p>{t(item)}</p>
        </li>
      ))}
    </ul>
  );
};

export default MainList;
