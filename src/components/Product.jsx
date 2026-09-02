const specs = [
  { label: 'Produttore', value: 'Amaro Lucano' },
  { label: 'Categoria', value: 'Liquore di limoni' },
  { label: 'Gradazione', value: '30% vol' },
  { label: 'Formato', value: '0,50 L' },
  { label: 'Denominazione', value: 'IGP — Penisola Sorrentina' },
  { label: 'Servizio', value: 'Ben freddo, 4–6 °C' },
]

const profile = [
  { label: 'Dolcezza', note: 'media', value: 58 },
  { label: 'Acidità', note: 'viva', value: 72 },
  { label: 'Aroma di scorza', note: 'intenso', value: 88, accent: true },
  { label: 'Corpo', note: 'pieno', value: 64 },
]

export default function Product() {
  return (
    <section className="product" id="prodotto">
      <div className="section-head">
        <p className="section-head__kicker">Il prodotto</p>
        <h2 className="section-head__title">
          Un limone che <em>sa di scorza</em>, non di zucchero
        </h2>
        <span className="section-head__rule" />
      </div>

      <div className="product__grid">
        <div className="product__text">
          <p className="lede">
            La Limoncetta di Sorrento IGP è un limoncello ottenuto dalle scorze dei
            limoni IGP della Penisola Sorrentina. La gradazione contenuta e
            l’equilibrio dolce-acido già bilanciato la rendono perfetta sia come
            digestivo ghiacciato sia come base da cocktail.
          </p>
          <p>
            Al naso è intensa di limone appena grattugiato; al palato piena, con un
            finale agrumato lungo e persistente. In miscelazione porta profumo e
            corpo senza appesantire: si allunga con bollicine e soda, lega con gli
            spirits bianchi e chiude i sour senza troppo sciroppo.
          </p>

          <dl className="spec">
            {specs.map((s) => (
              <div className="spec__row" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="product__profile">
          <p className="product__profile-title">Profilo sensoriale</p>
          {profile.map((p) => (
            <div className="meter" key={p.label}>
              <div className="meter__row">
                <span>{p.label}</span>
                <span>{p.note}</span>
              </div>
              <div className="meter__track">
                <div
                  className={`meter__fill${p.accent ? ' meter__fill--accent' : ''}`}
                  style={{ width: `${p.value}%` }}
                />
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
