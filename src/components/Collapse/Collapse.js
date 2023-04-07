import React from "react";

const CollapaseComponent = ({
  className,
  collapseTitle,
  collapseContent,
  collapseId,
}) => {
  return (
    <div className={className}>
      <div
        className="glory-semi-bold heading-1 course-criculum-title cursor-pointer"
        data-bs-toggle="collapse"
        data-bs-target={`#${collapseId}`}
        role="menuitem"
        aria-controls={collapseId}
      >
        <div>{collapseTitle}</div>
      </div>
      <div className="collapse" id={collapseId} data-bs-parent="#accordion">
        {collapseContent}
      </div>
    </div>
  );
};

export default CollapaseComponent;
