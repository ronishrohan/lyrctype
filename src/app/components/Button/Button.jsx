import React from "react";

const Button = ({ onClick, name,title, icon, ...others }) => {
  return (
    <div {...others} title={title}>
      <button
        onClick={onClick}
        className="relative size-full group rounded-md border-2 border-border hover:border-primary bg-background hover:bg-primary_tint flex items-center justify-center"
      >
        <div className="h-1/3 aspect-square fill-grey_surface group-hover:fill-primary ">
          {icon}
        </div>
        <div
          style={{ fontVariationSettings: '"wdth" 40, "grad" 120, "opsz" 95' }}
          className="font-semibold absolute group-hover:text-primary bottom-0 right-0 font-roboto m-2 text-xl leading-4 text-grey_surface"
        >
          {name}
        </div>
      </button>
    </div>
  );
};

export default Button;
