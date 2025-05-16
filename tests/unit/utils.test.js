// Importamos las funciones a probar
import { formatDate, formatMoney, getCurrentDate, toInputDateFormat } from '../../app/lib/utils';

// Prueba para formatDate
describe('formatDate', () => {
  // Configuración para mockear Date
  const RealDate = Date;
  
  beforeEach(() => {
    // Mock de fecha fija para pruebas consistentes
    global.Date = class extends RealDate {
      constructor(...args) {
        if (args.length === 0) {
          return new RealDate('2025-05-15T12:00:00Z');
        }
        return new RealDate(...args);
      }
    };
    global.Date.now = jest.fn(() => new RealDate('2025-05-15T12:00:00Z').getTime());
  });

  afterEach(() => {
    // Restaurar la implementación original de Date
    global.Date = RealDate;
  });

  test('debe formatear una fecha válida correctamente', () => {
    const fecha = '2025-01-10T15:30:00Z';
    const resultado = formatDate(fecha);
    expect(resultado).toBe('11/01/2025'); // Ajustando por zona horaria (+24h)
  });

  test('debe devolver "N/A" para una fecha inválida', () => {
    const resultado = formatDate('fecha-no-valida');
    expect(resultado).toBe('N/A');
  });

  test('debe devolver "N/A" para valores null/undefined', () => {
    expect(formatDate(null)).toBe('N/A');
    expect(formatDate(undefined)).toBe('N/A');
  });

  test('debe aplicar opciones personalizadas de formato', () => {
    const fecha = '2025-01-10T15:30:00Z';
    const opciones = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const resultado = formatDate(fecha, opciones);
    // El resultado esperado dependerá de la configuración regional
    expect(resultado).toContain('2025');
    expect(resultado.length).toBeGreaterThan(5);
  });
});

// Prueba para formatMoney
describe('formatMoney', () => {
  test('debe formatear un número correctamente', () => {
    expect(formatMoney(1234.56)).toBe('$1234.56');
    expect(formatMoney('1234.56')).toBe('$1234.56');
  });

  test('debe formatear con decimales personalizados', () => {
    expect(formatMoney(1234.5678, 3)).toBe('$1234.568');
    expect(formatMoney(1234, 0)).toBe('$1234');
  });

  test('debe manejar valores no numéricos', () => {
    expect(formatMoney('no-es-numero')).toBe('$0.00');
    expect(formatMoney(null)).toBe('$0.00');
    expect(formatMoney(undefined)).toBe('$0.00');
  });

  test('debe formatear cero correctamente', () => {
    expect(formatMoney(0)).toBe('$0.00');
    expect(formatMoney('0')).toBe('$0.00');
  });
});

// Prueba para getCurrentDate
describe('getCurrentDate', () => {
  // Configuración para mockear Date
  const RealDate = Date;
  
  beforeEach(() => {
    // Mock de fecha fija para pruebas consistentes
    global.Date = class extends RealDate {
      constructor(...args) {
        if (args.length === 0) {
          return new RealDate('2025-05-15T12:00:00Z');
        }
        return new RealDate(...args);
      }
    };
    global.Date.now = jest.fn(() => new RealDate('2025-05-15T12:00:00Z').getTime());
  });

  afterEach(() => {
    // Restaurar la implementación original de Date
    global.Date = RealDate;
  });

  test('debe devolver la fecha actual en formato YYYY-MM-DD', () => {
    const resultado = getCurrentDate();
    expect(resultado).toBe('2025-05-15');
  });
});

// Prueba para toInputDateFormat
describe('toInputDateFormat', () => {
  test('debe convertir una fecha a formato YYYY-MM-DD', () => {
    const fecha = new Date('2025-05-15T12:00:00Z');
    const resultado = toInputDateFormat(fecha);
    expect(resultado).toBe('2025-05-15');
  });

  test('debe manejar fechas en formato string', () => {
    expect(toInputDateFormat('2025-05-15T12:00:00Z')).toBe('2025-05-15');
  });

  test('debe devolver string vacío para valores null/undefined', () => {
    expect(toInputDateFormat(null)).toBe('');
    expect(toInputDateFormat(undefined)).toBe('');
  });

  test('debe devolver string vacío para fechas inválidas', () => {
    expect(toInputDateFormat('fecha-no-valida')).toBe('');
  });
});
