import React from "react";

const SubItem = ({ item }) => {
  return (
    <div className="experience py-5 px-4">
      <div className="job columns">
        <div className="job-title column">
          <div className="job-name subtitle is-4 has-text-weight-semibold">
            {item.title}
          </div>
          <div className="company subtitle is-5">{item.company}</div>
        </div>
        <div className="job-date column">
          <div className="date is-italic is-size-6">
            {item.startDate} - {item.endDate}
          </div>
          <div className="location is-italic is-size-6">{item.location}</div>
        </div>
      </div>
      <div className="description" style={{ lineHeight: "1.8rem" }}>
        {item.description}
      </div>
    </div>
  );
};

export default SubItem;
