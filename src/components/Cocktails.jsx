import { cocktails } from '../data/cocktails.js'
import CocktailIcon from '../assets/CocktailIcon.jsx'

export default function Cocktails() {
  return (
    <section className="cocktails" id="cocktail">
      <div className="section-head section-head--center">
        <p className="section-head__kicker">Le ricette</p>
        <h2 className="section-head__title">Otto cocktail d’autore</h2>
        <span className="section-head__rule" />
        <p className="cocktails__intro">
          Dallo spritz al sour, dal long drink dissetante al dopo-cena cremoso, fino
          alla versione light &amp; analcolica-friendly. La Limoncetta è sempre la
          protagonista.
        </p>
      </div>

      <ul className="grid">
        {cocktails.map((c) => (
          <li className="card" key={c.id}>
            <div className="card__top">
              <span className="card__num">{String(c.id).padStart(2, '0')}</span>
              <CocktailIcon type={c.icon} className="card__icon" />
            </div>
            <p className="card__family">{c.family}</p>
            <h3 className="card__name">{c.name}</h3>
            <p className="card__desc">{c.desc}</p>
            <ul className="card__ingredients">
              {c.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
            <span className={`badge badge--${c.difficulty.toLowerCase()}`}>
              {c.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
