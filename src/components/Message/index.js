import React from 'react';

function Message(props) {
  console.log(props);
  return (
    <aside className={`warning-box -${props.status} -${"messageAnimation"}`} id="current-warning">
      <i className="svg-icon">
        {<props.icon />}
      </i>
      <p className="text typo-body-2 typo-fw-regular">
        <span className="typo-sub-heading typo-fw-bold _pr-sm">
          {props.title}
        </span>
        {props.message}
      </p>
    </aside>
  );

}

export default Message;