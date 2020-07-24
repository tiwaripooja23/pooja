/**
 * ProgressBar Component
 */
import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

declare interface IFxProgressbar {
    progress?: any;
    type?: any;
    className?: string;
    text?: string;
}
// export progress bar
export const FxProgressbar: React.FC<IFxProgressbar> = ({
    progress,
    type,
    className,
    text
}) => {
    if (progress === 100 ) {
        className = className + " fx-progress-green";
    }
    //const classes = useStyles();
    //!!progress values --1 to 100
    //!!variant values --determinate,buffer
    //!!color values --default,secondary
    return (
        <div className={className ? className : ""} >
            <LinearProgress 
                variant={type}
                value={progress}
            
            />
            <span>{text}</span>
        </div>
    );
};
