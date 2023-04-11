import React from "react";

function Err404Page(props: { error: string, className?: string }) {
  const { error, className } = props;
  if (error === "invalidInput") {
    return <div className={className}>Please enter a search term</div>
  } 
  return <div className={className}>Oops... It seems like the page you were searching for does not exist</div>;
}

export default Err404Page;
