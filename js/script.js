document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");

  if (!form) {
    console.error("Formulario no encontrado");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const device = document.getElementById("device").value;
    const problem = document.getElementById("problem").value.trim();

    if (!name || !phone || !device) {
      alert("Por favor completa los campos obligatorios");
      return;
    }

    const message =
      `Hola, quiero agendar un servicio técnico.%0A%0A` +
      `👤 Nombre: ${name}%0A` +
      `📱 Teléfono: ${phone}%0A` +
      `🔧 Equipo: ${device}%0A` +
      `📝 Problema: ${problem || "No especificado"}`;

    const whatsappURL = `https://wa.me/573144053182?text=${message}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  });
});
