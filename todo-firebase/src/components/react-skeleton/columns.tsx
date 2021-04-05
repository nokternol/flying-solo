import { PropsWithChildren } from "react";
import classNames from "classnames";
type ColumnSize = "one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"|"eleven"|"twelve";
export function Columns({ children, className, size }: PropsWithChildren<{ className?: string, size: ColumnSize }>) {
    return <div className={classNames("columns", className, size)}>{children}</div>;
}