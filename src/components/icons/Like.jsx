import React from "react";

function Like(props) {
  return (
    <svg
      width={23}
      height={20}
      viewBox="0 0 23 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.38 2.591a5.533 5.533 0 00-1.792-1.177 5.61 5.61 0 00-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 00-3.908-1.59 5.576 5.576 0 00-3.908 1.59A5.384 5.384 0 001 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 001.198-1.762 5.348 5.348 0 000-4.157 5.423 5.423 0 00-1.198-1.762v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Like;
