import { IconType } from "react-icons";

interface IconStar {
  icon: IconType;
  size: number;
}

const IconComponent: React.FC<IconStar> = ({ icon: Icon, size}) => {
  return <Icon className="inline" size={size} />;
};

export default IconComponent;