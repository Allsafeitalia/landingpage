// Icone linea per le card cocktail. Fonte: deliverables/limoncetta/assets.svg.md
// type: glass | shaker | citrus | coupe
const paths = {
  glass: (
    <>
      <path d="M15 15 h11 l-1.5 8.6 a2 2 0 0 1 -2 1.7 h-6 a2 2 0 0 1 -2 -1.7 z" fill="#F4C430" opacity="0.35" stroke="none" />
      <path d="M9 7 h14 l-2 17.4 a2.4 2.4 0 0 1 -2.4 2.1 h-5.2 a2.4 2.4 0 0 1 -2.4 -2.1 z" />
      <path d="M10 15 h12" />
    </>
  ),
  shaker: (
    <>
      <path d="M11 14 h10 l-1.1 12.2 a2 2 0 0 1 -2 1.8 h-3.8 a2 2 0 0 1 -2 -1.8 z" fill="#F4C430" opacity="0.28" stroke="none" />
      <path d="M11 14 h10 l-1.1 12.2 a2 2 0 0 1 -2 1.8 h-3.8 a2 2 0 0 1 -2 -1.8 z" />
      <path d="M12.2 14 l1.1 -3.2 h5.4 l1.1 3.2" />
      <path d="M13.6 10.8 v-2.2 h4.8 v2.2" />
      <path d="M15 8.6 v-1.6 h2 v1.6" />
    </>
  ),
  citrus: (
    <>
      <circle cx="15" cy="18" r="8" fill="#F4C430" opacity="0.35" stroke="none" />
      <circle cx="15" cy="18" r="8" />
      <circle cx="15" cy="18" r="4" />
      <path d="M15 10.4 v15.2 M7.4 18 h15.2 M9.7 12.7 l10.6 10.6 M20.3 12.7 l-10.6 10.6" />
      <path d="M22 9 q3.4 -3.2 6.4 -2.1 q-1 4.1 -5.2 4.2" fill="#5B8A2B" stroke="none" />
      <path d="M22 9 q3.4 -3.2 6.4 -2.1" stroke="#3E6B1F" strokeWidth="1.2" />
    </>
  ),
  coupe: (
    <>
      <path d="M8 9 a8 4 0 0 0 16 0" fill="#F4C430" opacity="0.35" stroke="none" />
      <path d="M7 8 a9 4 0 0 0 18 0 a9 5 0 0 1 -18 0 z" />
      <path d="M16 17 v8" />
      <path d="M11 25 h10" />
    </>
  ),
}

export default function CocktailIcon({ type = 'glass', className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#26261F"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      {paths[type] || paths.glass}
    </svg>
  )
}
