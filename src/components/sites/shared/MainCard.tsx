import Image, { StaticImageData } from "next/image";

import { FC } from "react";

interface MainCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const MainCard: FC<MainCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="main-card">
      <div className="icon-container">
        <Image src={imageUrl} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MainCard;
