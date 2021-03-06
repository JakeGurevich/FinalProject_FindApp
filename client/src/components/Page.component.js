import React, { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | FindShiur`;
    window.scrollTo(0, 0);
  }, []);
  return <div>{props.children}</div>;
};

export default Page;
