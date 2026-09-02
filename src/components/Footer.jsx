export default function Footer() {
  return (
    <footer className="footer" id="shop">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__title">Limoncetta di Sorrento IGP</p>
          <p className="footer__note">
            Liquore di limoni · 30% vol · 0,50 L · IGP Penisola Sorrentina
          </p>
        </div>

        <div className="footer__cta">
          <a
            className="btn btn--primary"
            href="https://shop.amarolucano.it"
            target="_blank"
            rel="noreferrer"
          >
            Vai allo shop →
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <p>
          IGP — Indicazione Geografica Protetta: i limoni provengono dalla Penisola
          Sorrentina.
        </p>
        <p className="footer__made">Prodotto da Amaro Lucano · Bevi responsabilmente</p>
      </div>
    </footer>
  )
}
