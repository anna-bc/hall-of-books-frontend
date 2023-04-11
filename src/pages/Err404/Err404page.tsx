import React from "react";

function Err404Page(props: { error: string, className?: string }) {
  if (props.error === "invalidInput") {
    return <div className={props.className}>Please enter a search term</div>
  } 
  return <div className={props.className}>Oops... It seems like the page you were searching for does not exist</div>;
}

export default Err404Page;
