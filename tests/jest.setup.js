// Este archivo configura Jest antes de ejecutar las pruebas
// Aquí se pueden agregar configuraciones globales o mocks para todas las pruebas

// Mock global para evitar problemas con las APIs del navegador en Node.js
global.fetch = jest.fn();

// Silenciar logs durante las pruebas
console.error = jest.fn();
console.warn = jest.fn();
// Mantener console.log para depuración de pruebas si es necesario

// Limpiar todos los mocks antes de cada prueba
beforeEach(() => {
  jest.clearAllMocks();
});

// Función de ayuda para crear mocks de fechas si es necesario
global.mockDate = (isoDate) => {
  const RealDate = Date;
  global.Date = class extends RealDate {
    constructor(...args) {
      if (args.length === 0) {
        return new RealDate(isoDate);
      }
      return new RealDate(...args);
    }
    
    static now() {
      return new RealDate(isoDate).getTime();
    }
  };
  
  return () => {
    global.Date = RealDate;
  };
};
