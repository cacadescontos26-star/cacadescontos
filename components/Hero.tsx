export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/logo.png"
        alt="Caça Descontos"
        className="logo"
      />

      <h1>Caça Descontos</h1>

      <h2>🔥 As melhores ofertas estão aqui!</h2>

      <p>
        Entre no Grupo VIP e receba em primeira mão:
      </p>

      <ul className="benefits">
        <li>✅ Cupons de desconto</li>
        <li>✅ Produtos com até 80% de desconto</li>
        <li>✅ Ofertas por tempo limitado</li>
        <li>✅ Melhores achadinhos do Mercado Livre</li>
      </ul>

      <p className="call">
        💬 Entre agora e comece a economizar!
      </p>
    </section>
  );
}