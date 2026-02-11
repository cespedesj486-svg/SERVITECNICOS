document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
    FORMULARIO → WHATSAPP
     =============================== */
  const form = document.getElementById("serviceForm");

  if (form) {
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

      const whatsappURL = `https://wa.me/573204292384?text=${message}`;

      window.open(whatsappURL, "_blank");
      form.reset();
    });
  } else {
    console.warn("Formulario no encontrado");
  }

  /* ===============================
    MENÚ RESPONSIVE MOBILE
     =============================== */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Cerrar menú al tocar un enlace (UX pro)
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }

});
