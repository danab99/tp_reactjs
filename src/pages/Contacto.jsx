import "../styles/Contacto.css";

function Contacto() {
  return (
    <section className="contacto-container">
      <h1>Contacto</h1>

      <div className="contacto-info">
        <p><strong>Email:</strong> contacto@glowbeautystore.com</p>
        <p><strong>Teléfono:</strong> +54 9 11 1111-1111</p>
        <p><strong>Horario:</strong> Lunes a Viernes de 10 a 18hs</p>
      </div>

      <form className="contacto-form">
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" rows="5" required></textarea>
        </label>
        <button type="submit">Enviar mensaje</button>
      </form>

      <div className="contacto-redes">
        <p>También podés encontrarnos en:</p>
        <ul>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://tiktok.com" target="_blank">TikTok</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contacto;
