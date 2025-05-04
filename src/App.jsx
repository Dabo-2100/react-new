import clsx from "clsx"
import { useTheme } from "./zustand-store"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./shared/ui/pages/LoginPage";
import MainLayout from "./shared/ui/layouts/MainLayout";

export default function App() {
  const { isDarkMode } = useTheme();

  const appStyle = clsx(
    "h-[100dvh] w-full overflow-hidden",
    "bg-slate-100 text-gray-950",
    "dark:bg-gray-950 dark:text-slate-100 ",
    isDarkMode && "dark"
  )

  return (
    <div className={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<h1>Dashboard</h1>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
