import React from "react"

const TabHeaders = ({list}) => {
  let tabkey = 0;
  let tabs = list.map((data) => {
    return (
      <li class="tab col s3" key={++tabkey}>
        <a style={{color: '#1d5876'}} href={`#c${data.toLowerCase()}`}>{data}</a>
      </li>
    );
  });
  return (<ul class="tabs">{tabs}</ul>);
}
export default TabHeaders;
