import { PropsWithChildren } from "react";
export function Row({ children }: PropsWithChildren<{}>) {
    return <div className="row">{children}</div>;
}