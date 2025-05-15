/**
 * Formatea una fecha en formato legible
 * @param {string|Date} dateString - Fecha a formatear
 * @param {object} options - Opciones de formateo para toLocaleDateString
 * @returns {string} Fecha formateada
 */
export function formatDate(dateString, options = {}) {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  
  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    return 'N/A';
  }
  
  // Ajustar la fecha para compensar problemas de zona horaria
  const adjustedDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  
  // Opciones por defecto
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  
  // Combinar opciones por defecto con las personalizadas
  const formatOptions = { ...defaultOptions, ...options };
  
  return adjustedDate.toLocaleDateString('es-ES', formatOptions);
}

/**
 * Formatea un valor monetario
 * @param {number|string} value - Valor a formatear
 * @param {number} decimals - Número de decimales (default: 2)
 * @returns {string} Valor formateado como moneda
 */
export function formatMoney(value, decimals = 2) {
  const num = parseFloat(value);
  return isNaN(num) ? '$0.00' : `$${num.toFixed(decimals)}`;
}

/**
 * Obtiene la fecha actual en formato YYYY-MM-DD para inputs de tipo date
 * @returns {string} Fecha actual en formato YYYY-MM-DD
 */
export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Convierte una fecha a formato ISO para input date (YYYY-MM-DD)
 * @param {string|Date} dateString - Fecha a convertir
 * @returns {string} Fecha en formato YYYY-MM-DD
 */
export function toInputDateFormat(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    return '';
  }
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
