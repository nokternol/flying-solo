import { CSSProperties, PropsWithChildren } from "react";
import classNames from "classnames";
export function Section({ children, className, style }: PropsWithChildren<{ className?: string, style?: CSSProperties }>) {
    return <div className={classNames("section", className)} style={style}>{children}</div>;
}