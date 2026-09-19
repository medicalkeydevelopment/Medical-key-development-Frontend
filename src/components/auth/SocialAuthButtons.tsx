interface SocialAuthButtonsProps {
  onGoogleClick?: () => void;
  onAppleClick?: () => void;
  stack?: boolean;
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.48-1.13 2.73-2.4 3.58v2.98h3.88c2.27-2.09 3.54-5.17 3.54-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.88-2.98c-1.08.72-2.45 1.15-4.05 1.15-3.12 0-5.76-2.1-6.7-4.93H1.3v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.33c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.68H1.3A11.98 11.98 0 000 12.05c0 1.94.46 3.77 1.3 5.37l4-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.61 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.3 6.68l4 3.09c.94-2.83 3.58-5.02 6.7-5.02z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M16.36 1.43c0 1.14-.42 2.2-1.25 3.05-.95.98-2.24 1.6-3.44 1.5-.14-1.15.42-2.36 1.24-3.15C13.83.9 15.18.27 16.36 0c.02.14.02.29 0 1.43zM20 17.35c-.55 1.27-.82 1.83-1.53 2.94-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.94-1-4.02-1-2.09 0-2.53.98-4.07.99-1.72.02-3.03-1.75-4.02-3.32C-.15 16.6-.7 12.15.87 9.44c1.1-1.9 2.87-3.03 4.53-3.03 1.75 0 2.86 1.03 4.31 1.03 1.4 0 2.27-1.03 4.31-1.03 1.47 0 3.04.8 4.15 2.19-3.65 2-3.06 7.18.83 8.75z" />
    </svg>
  );
}

export function SocialAuthButtons({ onGoogleClick, onAppleClick, stack = false }: SocialAuthButtonsProps) {
  return (
    <div className={`grid gap-3 ${stack ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center gap-2.5 h-11 sm:h-12 rounded-[8px] border border-[#DCE4F2] bg-white text-sm font-medium text-[#0F1B3D] hover:bg-brand-50 hover:border-brand/30 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
      >
        <GoogleIcon />
        Continue with Google
      </button>
      <button
        type="button"
        onClick={onAppleClick}
        className="flex items-center justify-center gap-2.5 h-11 sm:h-12 rounded-[8px] border border-[#DCE4F2] bg-white text-sm font-medium text-[#0F1B3D] hover:bg-brand-50 hover:border-brand/30 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
      >
        <AppleIcon />
        Continue with Apple
      </button>
    </div>
  );
}
