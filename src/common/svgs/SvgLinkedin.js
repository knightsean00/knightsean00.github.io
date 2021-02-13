import * as React from "react";

function SvgLinkedin(props) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M1000 0H0v1000h1000V0zM278.425 900H126.488V342.898h151.937V900zm607.75 0H734.236V616.183c0-170.578-202.583-157.662-202.583 0V900H379.716V342.898h151.937v89.39c70.702-130.972 354.522-140.645 354.522 125.399V900zm-683.72-621.323c-48.922 0-88.63-40.01-88.63-89.337 0-49.329 39.708-89.34 88.63-89.34 48.925 0 88.631 40.011 88.631 89.34 0 49.327-39.656 89.337-88.631 89.337z" />
    </svg>
  );
}

export default SvgLinkedin;