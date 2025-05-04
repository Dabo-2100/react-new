import clsx from "clsx"
import { Outlet } from "react-router-dom"
import SideMenu from "../components/SideMenu/SideMenu"

export default function MainLayout() {
    const mainLayoutStyle = clsx(
        "flex h-full w-full overflow-hidden",
    )
    return (
        <div className={mainLayoutStyle}>
            <SideMenu />
            <div className="grow">
                <Outlet />
            </div>
        </div>
    )
}
