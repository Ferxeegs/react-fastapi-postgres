import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";
import { useSettings } from "../../context/SettingsContext";
import FaviconUpdater from "../../components/common/FaviconUpdater";
import SignInForm from "../../components/auth/SignInForm";
// import SignUpForm from "../../components/auth/SignUpForm";
import PageMeta from "../../components/common/PageMeta";
import SignUpContactAdmin from "../../components/auth/SignUpContactAdmin";
import AppLogo from "../../components/common/AppLogo";

export default function ModernAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings, isLoading: isSettingsLoading } = useSettings();

  const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");

  useEffect(() => {
    setIsSignUp(location.pathname === "/signup");
  }, [location.pathname]);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden transition-colors duration-500 p-4 sm:p-6 lg:p-8
      bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40
      dark:from-[#020617] dark:via-[#0a0f2e] dark:to-[#0c1445]">
      <FaviconUpdater />
      <PageMeta
        title={isSignUp ? "Sign Up" : "Sign In"}
        description={isSignUp ? "Daftar ke sistem" : "Masuk ke sistem"}
      />

      <div className="fixed z-50 bottom-6 right-6">
        <ThemeTogglerTwo />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* ── LIGHT MODE BACKGROUND ── */}
      {/* ═══════════════════════════════════════════ */}
      {/* Primary warm-blue orb — top-left */}
      <div className="absolute -top-[20%] -left-[15%] w-[50vw] h-[50vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none
        bg-[radial-gradient(circle,_rgba(70,95,255,0.18)_0%,_rgba(99,102,241,0.08)_40%,_transparent_70%)]
        blur-[80px] dark:hidden" />
      {/* Secondary soft-indigo — bottom-right */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[45vw] h-[45vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none
        bg-[radial-gradient(circle,_rgba(129,140,248,0.15)_0%,_rgba(99,102,241,0.05)_45%,_transparent_70%)]
        blur-[90px] dark:hidden" />

      {/* ═══════════════════════════════════════════ */}
      {/* ── DARK MODE BACKGROUND ── */}
      {/* ═══════════════════════════════════════════ */}
      {/* 1. Core electric-blue nebula — top-left, high intensity */}
      <div className="absolute -top-[20%] -left-[15%] w-[70vw] h-[70vw] max-w-[1200px] max-h-[1200px] rounded-full pointer-events-none
        bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_rgba(37,99,235,0.15)_30%,_rgba(30,58,138,0.05)_55%,_transparent_75%)]
        blur-[100px] hidden dark:block" />
      {/* 2. Vivid indigo wash — bottom-right */}
      <div className="absolute -bottom-[15%] -right-[15%] w-[65vw] h-[65vw] max-w-[1100px] max-h-[1100px] rounded-full pointer-events-none
        bg-[radial-gradient(circle,_rgba(99,102,241,0.3)_0%,_rgba(67,56,202,0.12)_35%,_transparent_70%)]
        blur-[110px] hidden dark:block" />
      {/* 3. Cyan accent streak — center-right */}
      <div className="absolute top-[15%] -right-[8%] w-[40vw] h-[30vw] max-w-[700px] max-h-[500px] rounded-full pointer-events-none
        bg-[radial-gradient(ellipse,_rgba(34,211,238,0.18)_0%,_rgba(6,182,212,0.06)_40%,_transparent_65%)]
        blur-[80px] rotate-[-15deg] hidden dark:block" />
      {/* 4. Subtle warm accent — bottom-left */}
      <div className="absolute bottom-[5%] left-[5%] w-[30vw] h-[25vw] max-w-[500px] max-h-[400px] rounded-full pointer-events-none
        bg-[radial-gradient(ellipse,_rgba(139,92,246,0.12)_0%,_transparent_60%)]
        blur-[70px] hidden dark:block" />

      {/* ═══════════════════════════════════════════ */}
      {/* ── SHARED TEXTURE OVERLAYS ── */}
      {/* ═══════════════════════════════════════════ */}
      {/* Fine noise grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none
        opacity-[0.08] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 0.8px, transparent 0.8px)`,
          backgroundSize: '32px 32px',
          color: '#465fff',
        }}
      />

      {/* Decorative wireframe shapes — visible in both modes */}
      <div className="absolute top-[8%] left-[6%] w-44 h-44 rounded-[2.5rem] rotate-[18deg] pointer-events-none hidden xl:block
        border border-brand-500/[0.12] dark:border-brand-400/[0.15]
        animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-[12%] right-[8%] w-56 h-56 rounded-full pointer-events-none hidden xl:block
        border border-indigo-400/[0.08] dark:border-indigo-400/[0.12]
        animate-[float-reverse_25s_ease-in-out_infinite]" />
      <div className="absolute top-[60%] left-[3%] w-20 h-20 rounded-xl -rotate-12 pointer-events-none hidden xl:block
        border-2 border-cyan-500/[0.06] dark:border-cyan-400/[0.1]
        animate-[float_16s_ease-in-out_infinite_2s]" />

      {/* Micro glow particles */}
      <div className="absolute top-[22%] left-[30%] w-2 h-2 rounded-full pointer-events-none
        bg-brand-400 blur-[3px] opacity-30 dark:opacity-50
        animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-[35%] right-[25%] w-1.5 h-1.5 rounded-full pointer-events-none
        bg-cyan-400 blur-[2px] opacity-20 dark:opacity-45
        animate-[pulse_5s_ease-in-out_infinite_1.5s]" />
      <div className="absolute top-[70%] right-[18%] w-2.5 h-2.5 rounded-full pointer-events-none
        bg-violet-400 blur-[3px] opacity-15 dark:opacity-40
        animate-[pulse_6s_ease-in-out_infinite_3s]" />

      {/* Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(18deg); }
          50% { transform: translateY(-35px) rotate(12deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-45px) scale(1.04); }
        }
      `}</style>

      {/* ═══════════════════════════════════════════ */}
      {/* ── MAIN CARD ── */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative w-full max-w-5xl h-[720px] lg:h-[660px]
        overflow-hidden flex flex-col lg:flex-row
        rounded-[2rem]
        bg-white/75 dark:bg-slate-900/70
        backdrop-blur-2xl backdrop-saturate-150
        shadow-[0_4px_32px_-8px_rgba(70,95,255,0.12),0_24px_64px_-16px_rgba(15,23,42,0.1)]
        dark:shadow-[0_4px_40px_-8px_rgba(59,130,246,0.2),0_24px_80px_-16px_rgba(0,0,0,0.6)]
        border border-white/70 dark:border-slate-700/50
        ring-1 ring-black/[0.04] dark:ring-white/[0.06]">

        {/* === MOBILE/TABLET VIEW === */}
        <div className="lg:hidden w-full h-full relative overflow-y-auto no-scrollbar">
          <div className={`absolute top-0 left-0 w-full p-6 sm:p-8 transition-all duration-500 ${isSignUp ? 'opacity-0 invisible scale-95 pointer-events-none' : 'opacity-100 visible scale-100 delay-200'}`}>
            <SignInForm />
          </div>
          <div className={`absolute top-0 left-0 w-full p-6 sm:p-8 transition-all duration-500 ${!isSignUp ? 'opacity-0 invisible scale-95 pointer-events-none' : 'opacity-100 visible scale-100 delay-200'}`}>
            <SignUpContactAdmin />
          </div>
        </div>

        {/* === DESKTOP VIEW === */}
        <div className="hidden lg:flex absolute inset-0 w-full h-full z-10 pointer-events-none">
          <div className={`w-1/2 h-full flex items-center justify-center p-12 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSignUp ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-100 translate-x-0 delay-200 pointer-events-auto'}`}>
            <div className="w-full max-w-sm"><SignInForm /></div>
          </div>
          <div className={`w-1/2 h-full flex items-center justify-center p-12 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isSignUp ? 'opacity-0 translate-x-16 pointer-events-none' : 'opacity-100 translate-x-0 delay-200 pointer-events-auto'}`}>
            <div className="w-full max-w-sm"><SignUpContactAdmin /></div>
          </div>
        </div>

        {/* Sliding Overlay Panel */}
        <div
          className={`hidden lg:flex absolute top-0 w-1/2 h-full z-20 flex-col items-center justify-center p-12 transition-all duration-1000 ease-[cubic-bezier(0.65,0.05,0.15,1)] overflow-hidden
            bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-900
            shadow-[4px_0_40px_-4px_rgba(0,0,0,0.3)] dark:shadow-[4px_0_60px_-4px_rgba(0,0,0,0.7)]
            ${isSignUp
              ? 'translate-x-0 rounded-none rounded-l-3xl rounded-r-[150px]'
              : 'translate-x-full rounded-none rounded-r-3xl rounded-l-[150px]'}
          `}
        >
          {/* Panel inner glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full
              bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_60%)]
              blur-[40px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full
              bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.2)_0%,_transparent_60%)]
              blur-[50px]" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full
              bg-[radial-gradient(ellipse_at_center,_rgba(125,211,252,0.08)_0%,_transparent_70%)]
              blur-[30px] -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Decorative rings */}
          <div className="absolute top-[-20%] left-[-20%] w-64 h-64 border-[1.5px] border-white/[0.08] rounded-full pointer-events-none" />
          <div className="absolute top-[-18%] left-[-18%] w-72 h-72 border border-white/[0.04] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-20%] w-80 h-80 border-[1.5px] border-white/[0.08] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-18%] right-[-18%] w-96 h-96 border border-white/[0.04] rounded-full pointer-events-none" />

          {/* Panel Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Sign Up content */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out
               ${isSignUp ? 'opacity-100 translate-x-0 delay-300 pointer-events-auto' : 'opacity-0 translate-x-16 pointer-events-none'}
             `}>
              <AppLogo dark={true} className="h-12 w-auto mb-10 brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 transition-transform duration-300" />
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm flex justify-center">
                {isSettingsLoading ? (
                  <span className="block h-10 w-64 bg-white/20 animate-pulse rounded-lg" />
                ) : (
                  settings?.general?.site_name || "Welcome Back!"
                )}
              </h2>
              <div
                className="text-blue-100/80 text-lg mb-10 max-w-xs font-light leading-relaxed flex flex-col items-center gap-2"
                role={isSettingsLoading ? "status" : undefined}
                aria-busy={isSettingsLoading || undefined}
              >
                {isSettingsLoading ? (
                  <>
                    <span className="block h-5 w-full max-w-[280px] bg-white/20 animate-pulse rounded-md" />
                    <span className="block h-5 w-4/5 max-w-[224px] bg-white/20 animate-pulse rounded-md" />
                  </>
                ) : (
                  settings?.general?.site_tagline || "To keep connected with us please login with your personal info."
                )}
              </div>
              <button
                onClick={() => navigate('/signin')}
                className="rounded-xl border-2 border-white/90 bg-transparent px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0c592c] focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Sign In
              </button>
            </div>

            {/* Sign In content */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out
               ${!isSignUp ? 'opacity-100 translate-x-0 delay-300 pointer-events-auto' : 'opacity-0 -translate-x-16 pointer-events-none'}
             `}>
              <AppLogo dark={true} className="h-12 w-auto mb-10 brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 transition-transform duration-300" />
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm flex justify-center">
                {isSettingsLoading ? (
                  <span className="block h-10 w-64 bg-white/20 animate-pulse rounded-lg" />
                ) : (
                  settings?.general?.site_name || "Hello, Friend!"
                )}
              </h2>
              <div
                className="text-blue-100/80 text-lg mb-10 max-w-xs font-light leading-relaxed flex flex-col items-center gap-2"
                role={isSettingsLoading ? "status" : undefined}
                aria-busy={isSettingsLoading || undefined}
              >
                {isSettingsLoading ? (
                  <>
                    <span className="block h-5 w-full max-w-[280px] bg-white/20 animate-pulse rounded-md" />
                    <span className="block h-5 w-4/5 max-w-[224px] bg-white/20 animate-pulse rounded-md" />
                  </>
                ) : (
                  settings?.general?.site_tagline || "Enter your personal details and start your journey with us today."
                )}
              </div>
              <button
                onClick={() => navigate('/signup')}
                className="rounded-xl border-2 border-white/90 bg-transparent px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0c592c] focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}