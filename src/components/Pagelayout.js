import React from "react";
const PageLayout=({header,footer,children})=>{
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