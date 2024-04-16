import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface props {
  onClick: () => void;
}

const Like = ({ onClick }: props) => {
  const [toggle, setToggle] = useState(true);

  const toggleStatus = (): void => {
    setToggle(!toggle);
    onClick();
  };

  if (toggle) return <FaRegHeart onClick={() => toggleStatus()} size={20} />;

  return (
    <FaHeart size={20} color="#ff6b81" onClick={() => toggleStatus()}>
      {" "}
    </FaHeart>
  );
};

export default Like;
