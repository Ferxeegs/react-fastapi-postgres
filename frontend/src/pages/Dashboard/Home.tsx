import PageMeta from "../../components/common/PageMeta";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { userAPI } from "../../utils/api";
import { UserIcon } from "../../icons";

/* ───────── KPI card ───────── */
function KpiCard({
  icon,
  label,
  value,
  subtitle,
  accentClass = "bg-brand-500/10 text-brand-500",
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  accentClass?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentClass}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          {label}
        </p>
        <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const usersRes = await userAPI.getAllUsers({ page: 1, limit: 1 });
        if (cancelled) return;

        if (usersRes.success) {
          setUserCount(usersRes.data?.pagination?.total ?? 0);
        }
      } catch (e) {
        console.error("Dashboard fetch error", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 17) return "Good Afternoon";
    return "Good Evening";
  })();

  const firstName = user?.firstname || user?.username || "Admin";

  return (
    <>
      <PageMeta
        title="Dashboard - Boilerplate"
        description="Main dashboard of the system"
      />

      <div className="space-y-6 p-4 text-gray-900 dark:text-white sm:p-6">
        {/* ── Welcome Banner ── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 p-6 text-white shadow-lg sm:p-8">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/5 blur-xl" />
          <div className="relative">
            <p className="text-sm font-medium text-blue-200/80">
              {greeting}, {firstName} 👋
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Boilerplate Dashboard
            </h1>
            <p className="mt-2 max-w-lg text-sm text-blue-100/70">
              Welcome to the React + FastAPI boilerplate system.
            </p>
          </div>
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            icon={<UserIcon className="size-6" />}
            label="Total Users"
            value={loading ? "..." : userCount}
            subtitle="Registered users in the system"
            accentClass="bg-violet-500/10 text-violet-500"
          />
        </div>
      </div>
    </>
  );
}
