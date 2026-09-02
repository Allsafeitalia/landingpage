// Illustrazione di copertina — bottiglia + calice coupe + limoni di Sorrento.
// Fonte: deliverables/limoncetta/assets.svg.md (cover-illustration).
export default function CoverIllustration({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 520"
      role="img"
      aria-label="Limoni di Sorrento con bottiglia e calice"
    >
      <defs>
        <linearGradient id="limLiquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7E58A" />
          <stop offset="1" stopColor="#E9B838" />
        </linearGradient>
        <linearGradient id="limGlassBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FBF6E9" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="limHalo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FBEFC4" />
          <stop offset="1" stopColor="#FBF6E9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="220" r="205" fill="url(#limHalo)" />

      <g stroke="#E0A81B" strokeWidth="2.4" strokeLinecap="round" opacity="0.55">
        <line x1="210" y1="34" x2="210" y2="8" />
        <line x1="120" y1="66" x2="103" y2="42" />
        <line x1="300" y1="66" x2="317" y2="42" />
        <line x1="66" y1="150" x2="38" y2="139" />
        <line x1="354" y1="150" x2="382" y2="139" />
        <line x1="58" y1="250" x2="30" y2="252" />
        <line x1="362" y1="250" x2="390" y2="252" />
      </g>

      <ellipse cx="210" cy="486" rx="176" ry="17" fill="#2B2B26" opacity="0.08" />

      <g>
        <path
          d="M152 96 V60 H168 V96 q22 8 22 40 V416 q0 14 -14 14 H144 q-14 0 -14 -14 V136 q0 -32 22 -40 Z"
          fill="#3E6B1F"
        />
        <rect x="134" y="150" width="10" height="250" rx="5" fill="#FBF6E9" opacity="0.22" />
        <rect x="150" y="58" width="20" height="4" fill="#2B2B26" />
        <rect x="149" y="42" width="22" height="17" rx="2" fill="#2B2B26" />
        <rect x="150" y="96" width="20" height="6" fill="#F4C430" />
        <rect x="126" y="224" width="68" height="118" rx="5" fill="#FBF6E9" stroke="#E0A81B" strokeWidth="1.5" />
        <ellipse cx="160" cy="270" rx="15" ry="18" fill="#F4C430" />
        <path d="M160 250 q5 -8 12 -8 q-2 8 -7 11 z" fill="#5B8A2B" />
        <ellipse cx="154" cy="263" rx="5" ry="3" fill="#F7E58A" opacity="0.8" />
        <path d="M138 306 h44 M142 316 h36" stroke="#E0A81B" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(302 176)">
        <path d="M-60 -8 a60 22 0 0 0 120 0 a60 30 0 0 1 -120 0 Z" fill="url(#limGlassBody)" />
        <path d="M-49 0 a49 24 0 0 0 98 0 Z" fill="url(#limLiquid)" />
        <path d="M-60 -8 a60 22 0 0 0 120 0" fill="none" stroke="#FFFFFF" strokeWidth="2.2" opacity="0.85" />
        <rect x="-3" y="22" width="6" height="60" fill="#FBF6E9" />
        <path d="M-28 88 q28 -14 56 0 q-28 8 -56 0 Z" fill="#FBF6E9" />
        <path d="M40 -22 a11 11 0 1 1 -6 -9 a6.5 6.5 0 1 0 4 9 Z" fill="#F4C430" />
        <path d="M40 -22 a11 11 0 1 1 -6 -9" fill="none" stroke="#E0A81B" strokeWidth="1.4" />
      </g>

      <g>
        <path d="M150 402 q30 -30 76 -20 q-24 40 -76 20 Z" fill="#5B8A2B" />
        <path d="M150 402 q30 -30 76 -20" fill="none" stroke="#3E6B1F" strokeWidth="1.6" />
        <path d="M262 396 q30 -26 70 -12 q-28 34 -70 12 Z" fill="#6FA33A" />
        <path d="M262 396 q30 -26 70 -12" fill="none" stroke="#3E6B1F" strokeWidth="1.6" />

        <g transform="rotate(-13 120 432)">
          <ellipse cx="120" cy="432" rx="35" ry="27" fill="#F4C430" />
          <path d="M153 430 q11 -2 16 0 q-7 6 -15 5 Z" fill="#E0A81B" />
          <path d="M87 434 q-11 2 -16 0 q7 -6 15 -5 Z" fill="#E0A81B" />
          <ellipse cx="108" cy="421" rx="11" ry="6" fill="#F7E58A" opacity="0.75" />
        </g>

        <g transform="rotate(9 214 452)">
          <ellipse cx="214" cy="452" rx="33" ry="26" fill="#E8BE3C" />
          <path d="M245 450 q10 -2 15 0 q-6 6 -14 5 Z" fill="#E0A81B" />
          <path d="M183 454 q-10 2 -15 0 q6 -6 14 -5 Z" fill="#E0A81B" />
          <ellipse cx="203" cy="442" rx="10" ry="5" fill="#F7E58A" opacity="0.6" />
        </g>

        <g transform="translate(312 438)">
          <circle cx="0" cy="0" r="42" fill="#E0A81B" />
          <circle cx="0" cy="0" r="37" fill="#F4C430" />
          <circle cx="0" cy="0" r="31" fill="#FBF6E9" />
          <g fill="#F7E58A" stroke="#FBF6E9" strokeWidth="2.4">
            <path d="M0 0 L28 0 A28 28 0 0 1 19.8 19.8 Z" />
            <path d="M0 0 L19.8 19.8 A28 28 0 0 1 0 28 Z" />
            <path d="M0 0 L0 28 A28 28 0 0 1 -19.8 19.8 Z" />
            <path d="M0 0 L-19.8 19.8 A28 28 0 0 1 -28 0 Z" />
            <path d="M0 0 L-28 0 A28 28 0 0 1 -19.8 -19.8 Z" />
            <path d="M0 0 L-19.8 -19.8 A28 28 0 0 1 0 -28 Z" />
            <path d="M0 0 L0 -28 A28 28 0 0 1 19.8 -19.8 Z" />
            <path d="M0 0 L19.8 -19.8 A28 28 0 0 1 28 0 Z" />
          </g>
          <circle cx="0" cy="0" r="4.5" fill="#FBF6E9" />
        </g>
      </g>
    </svg>
  )
}
