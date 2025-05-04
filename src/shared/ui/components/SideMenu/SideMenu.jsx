import clsx from "clsx"

export default function SideMenu() {
    const sideMenuStyle = clsx(
        "w-[200px] h-full flex flex-col gap-4",
        "border-r border-slate-100/20",
        "bg-slate-100",
        "dark:bg-gray-950",
    )
    return (
        <div className={sideMenuStyle}>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">SideMenu</h1>
            </div>
        </div>
    )
}
