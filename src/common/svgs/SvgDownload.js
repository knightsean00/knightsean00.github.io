import * as React from "react";

function SvgDownload(props) {
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
      <path d="M1000 0H0v1000h1000V0zM381.533 113.018A13.02 13.02 0 01394.552 100h210.896a13.02 13.02 0 0113.019 13.018v455.641h153.901a6.51 6.51 0 014.969 10.714L509.938 895.39a13.015 13.015 0 01-19.876 0L222.663 579.373a6.508 6.508 0 014.969-10.714h153.901V113.018z" />
    </svg>
  );
}

export default SvgDownload;