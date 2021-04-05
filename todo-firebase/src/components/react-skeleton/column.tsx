import { PropsWithChildren } from "react";
import classNames from "classnames";
type ColumnSize = "one-half" | "one-third" | "two-thirds" | "one";
export function Column({ children, className, size }: PropsWithChildren<{ className?: string, size: ColumnSize }>) {
    return <div className={classNames("column", size, className)}>{children}</div>;
}