import React from "react";
const PageLayout=({header,children,footer})=>{
    console.log("pagelayout")
    return (
        <div>
            {header}
            {children}
            {footer}
        </div>

    );
}

export default PageLayout;