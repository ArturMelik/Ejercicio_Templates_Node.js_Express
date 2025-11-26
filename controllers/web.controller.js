const webController = {
  home: (req, res) => {
    res.render("page", { 
      title: "Inicio", 
      heading: "Bienvenido a nuestra página principal", 
      content: "Aquí encontrarás información sobre nuestros servicios y proyectos.", 
      page: "home"
    });
  },

  about: (req, res) => {
    res.render("page", { 
      title: "Quiénes somos", 
      heading: "Conoce más sobre nosotros", 
      content: "Somos un equipo apasionado por la tecnología y la innovación.",
      page: "about"
    });
  },

  location: (req, res) => {
    res.render("page", { 
      title: "Dónde estamos", 
      heading: "Encuéntranos fácilmente", 
      content: "Nuestra oficina está ubicada en el corazón de la ciudad.", 
      page: "location",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.64658688806!2d-3.8675613635368284!3d40.341428648812276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229dd28bc4f6b%3A0x1b818ff2f527183b!2sThe%20Bridge%20%7C%20Digital%20Talent%20Accelerator!5e0!3m2!1ses!2ses!4v1762901533055!5m2!1ses!2ses" 
    });
  },

  mission: (req, res) => {
    res.render("page", { 
      title: "Nuestra misión", 
      heading: "Lo que hacemos día a día", 
      content: "Ofrecemos soluciones tecnológicas innovadoras.", 
      page: "mission",
      services: [
        "Desarrollo Web",
        "Aplicaciones Móviles",
        "Consultoría IT",
        "Soporte y Mantenimiento"
      ]
    });
  },

  contact: (req, res) => {
    res.render("page", { 
      title: "Contacto", 
      heading: "Ponte en contacto con nosotros", 
      content: "Rellena el formulario y nos pondremos en contacto contigo.", 
      page: "contact"
    });
  },

  submitContact: (req, res) => {
    const { name, email, message } = req.body;
    console.log("Mensaje recibido:", name, email, message);
    res.send(`Gracias ${name}, tu mensaje ha sido recibido.`);
  }
};

module.exports = webController;
