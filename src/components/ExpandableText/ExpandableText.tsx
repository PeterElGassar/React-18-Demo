import { useState } from "react";

interface props {
  maxLength: number;
  children: string;
}

const ExpandableText = ({ children, maxLength = 50 }: props) => {
  if (children.length <= maxLength) return <p>{children}</p>;

  const [toggleShowMore, settoggleShowMore] = useState(false);

  let text: string = toggleShowMore
    ? children
    : children
        .substring(0, toggleShowMore ? children.length : maxLength)
        .concat("...");

  return (
    <div>
      <span>{text}</span>
      <button onClick={() => settoggleShowMore(!toggleShowMore)}>
        show {toggleShowMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default ExpandableText;
