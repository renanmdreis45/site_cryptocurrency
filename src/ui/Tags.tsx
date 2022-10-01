import React from "react";

interface Props {
    className: string | undefined;
    children: React.ReactNode;
}

export const Tags: React.FC<Props> = ({className, children}) => {
    return (
        <span 
          className={`p-[0.35rem] tracking-wide rounded-md text-[0.65rem] font-normal ${
            className !== undefined
            ? className
            : "bg-blue-50 text-grey-700"
          }`}
        >
            {children}
        </span>
    );
}