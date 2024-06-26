import React from "react";

const css = `



svg {
	font-family: "Roboto", sans-serif;
	width: 100%; height: 100%;
}
svg text {
	animation: stroke 2s infinite alternate;
	stroke-width: 2;
	stroke: #F13E77;
	font-size: 100px;
}
@keyframes stroke {
	0%   {
		fill: rgba(118,73,164,0); stroke: rgba(241,62,119,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(118,73,164,0); stroke: rgba(241,62,119,1); }
	80%  {fill: rgba(118,73,164,0); stroke: rgba(241,62,119,1); stroke-width: 3; }
	100% {
		fill: rgba(118,73,164,1); stroke: rgba(241,62,119,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
}

.wrapper-w {background-color: #FFFFFF};


`;

const loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
      }}
    >
      <style>{css}</style>
      <div className="wrapper-w">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            ExploreDen
          </text>
        </svg>
      </div>
    </div>
  );
};

export default loading;
