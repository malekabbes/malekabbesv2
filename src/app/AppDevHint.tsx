import React from "react";

const AppDevHint = () => {
  const envName = "Website still under development";

  if (!envName) {
    return null;
  }

  return (
    <div className="z-50 fixed top-0 inset-0 h-2 bg-white-300">
      <div className="fixed top-0 inset-start-4 bg-yellow-300 text-white-900 text-xs font-bold px-1 rounded-sm uppercase">
        {envName}
      </div>
    </div>
  );
};

export default AppDevHint;
