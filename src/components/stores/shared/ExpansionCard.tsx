import MotionWrapper from "@/components/tools/MotionWrapper";

const ExpansionCard = ({ title, item1, item2 }) => {
  return (
    <MotionWrapper
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className="expansionCard">
        <div className="content">
          <h3>{title}</h3>
          <ul>
            <li>{item1}</li>
            <li>{item2}</li>
          </ul>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ExpansionCard;
