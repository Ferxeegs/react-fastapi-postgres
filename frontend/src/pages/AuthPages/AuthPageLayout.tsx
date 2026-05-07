import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";
import { useSettings } from "../../context/SettingsContext";
import FaviconUpdater from "../../components/common/FaviconUpdater";
import AppLogo from "../../components/common/AppLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings, isLoading: isSettingsLoading } = useSettings();

  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      {/* Update favicon dan meta berbasis settings, juga untuk halaman auth */}
      <FaviconUpdater />
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <AppLogo className="block h-12 w-[231px]" />
              </Link>
              {isSettingsLoading ? (
                <div className="mt-2 flex w-full justify-center">
                  <div className="h-4 w-56 animate-pulse rounded bg-white/[0.08] dark:bg-white/[0.04]" />
                </div>
              ) : (
                <p className="text-center text-gray-400 dark:text-white/60">
                  {settings?.general?.site_tagline ||
                    settings?.general?.site_description ||
                    "Tagline belum diatur"}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
