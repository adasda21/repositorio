// Función para manejar la petición GET
const getData = (req, res) => {
    try {
      // Simula datos desde la base de datos o lógica del servidor
      const data = { message: '¡Hola desde el backend!' };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
  };
  
  module.exports = { getData };
  