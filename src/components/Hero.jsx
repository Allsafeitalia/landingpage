import CoverIllustration from '../assets/CoverIllustration.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Penisola Sorrentina · IGP</p>
          <h1 className="hero__title">
            Limoncetta
            <span>di Sorrento IGP</span>
          </h1>
          <p className="hero__tagline">
            Il limoncello dei limoni della Costiera: profumo intenso di scorza appena
            tagliata, equilibrio dolce-acido e 30% vol. Da bere ghiacciato — o da
            miscelare.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#cocktail">
              Scopri gli 8 cocktail
            </a>
            <a
              className="btn btn--ghost"
              href="https://shop.amarolucano.it"
              target="_blank"
              rel="noreferrer"
            >
              Acquista sullo shop
            </a>
          </div>
          <ul className="hero__facts">
            <li><strong>30%</strong> vol</li>
            <li><strong>0,50</strong> L</li>
            <li><strong>IGP</strong> Sorrento</li>
          </ul>
        </div>

        <div className="hero__art">
          <CoverIllustration className="hero__svg" />
        </div>
      </div>
      <a className="hero__scroll" href="#prodotto" aria-label="Scorri alla sezione prodotto">
        <span />
      </a>
    </header>
  )
}
