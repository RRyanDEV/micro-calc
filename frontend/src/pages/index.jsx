import Calculator from "@/components/Layout/calculator";
import SwitchTheme from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div id="parent" className="h-screen flex items-center justify-center bg-gray-900 dark:bg-emerald-700">
        <SwitchTheme />
        <Calculator />
      </div>
    </>
  );
}
