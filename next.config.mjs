/** @type {import('next').NextConfig} */
// Define tu objeto de configuración dentro de una constante
const nextConfig = {
    images: {
      domains: ['example.com'], // Lista de dominios permitidos para las imágenes
      deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920], // Tamaños de dispositivo estándar
      imageSizes: [16, 32, 48, 64, 96], // Tamaños predefinidos para la generación de imágenes
    },
  };
  
  // Exporta el objeto de configuración como exportación por defecto (ES Modules)
  export default nextConfig;