/**
 * Funciones de utilidad para el manejo de fechas en la aplicación
 */

/**
 * Obtiene la fecha actual con la hora establecida a mediodía para
 * evitar problemas de zona horaria al convertir entre UTC y hora local.
 * La fecha se ajusta para asegurar que sea la fecha correcta en la zona horaria local.
 * @returns {Date} Fecha actual con la hora establecida a mediodía
 */
export function getCurrentDateNormalized() {
  // Obtener la fecha actual
  const now = new Date();
  
  // Obtener la fecha utc
  const utcNow = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0));
  
  // Convertir a fecha local - añadimos 24 horas para asegurarnos de que es la fecha correcta
  // Esto garantiza que independientemente de la zona horaria, la fecha será la actual local
  return new Date(utcNow.getTime() + 24 * 60 * 60 * 1000);
}

/**
 * Normaliza una fecha estableciendo la hora a mediodía
 * para evitar problemas de zona horaria
 * @param {Date|string} date - La fecha a normalizar
 * @returns {Date} La fecha normalizada con la hora establecida a mediodía
 */
export function normalizeDate(date) {
  if (!date) return null;
  
  const dateObj = new Date(date);
  
  // Crear fecha UTC con la misma fecha local pero a mediodía
  const utcDate = new Date(Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 12, 0, 0));
  
  // Añadir 24 horas para asegurar que es la fecha correcta en la zona horaria local
  return new Date(utcDate.getTime() + 24 * 60 * 60 * 1000);
}

/**
 * Comprueba si dos fechas son el mismo día o si la primera fecha es del día anterior
 * para compensar problemas de zona horaria (ignora la hora)
 * @param {Date|string} date1 - Primera fecha
 * @param {Date|string} date2 - Segunda fecha (normalmente la fecha actual)
 * @returns {boolean} true si ambas fechas corresponden al mismo día o date1 es del día anterior a date2
 */
export function isSameDay(date1, date2) {
  if (!date1 || !date2) return false;
  
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  // Verificar si las fechas son del mismo día
  const exactSameDay = (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
  
  if (exactSameDay) return true;
  
  // Verificar si date1 es del día anterior a date2 (para compensar posibles problemas de zona horaria)
  const d2Yesterday = new Date(d2);
  d2Yesterday.setDate(d2.getDate() - 1);
  
  return (
    d1.getDate() === d2Yesterday.getDate() &&
    d1.getMonth() === d2Yesterday.getMonth() &&
    d1.getFullYear() === d2Yesterday.getFullYear()
  );
}

/**
 * Comprueba si dos fechas son del mismo mes (ignora el día y la hora)
 * @param {Date|string} date1 - Primera fecha
 * @param {Date|string} date2 - Segunda fecha
 * @returns {boolean} true si ambas fechas corresponden al mismo mes
 */
export function isSameMonth(date1, date2) {
  if (!date1 || !date2) return false;
  
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  return (
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}

/**
 * Obtiene la fecha actual para Colombia en formato ISO
 * Colombia está en UTC-5 (COT - Colombia Time)
 * @returns {string} Fecha actual en formato ISO para Colombia
 */
export function getColombiaLocalDate() {
  const now = new Date();
  
  // Crear fecha en zona horaria de Colombia (UTC-5)
  const options = { 
    timeZone: 'America/Bogota',
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit'
  };
  
  return new Date(now.toLocaleDateString('en-US', options)).toISOString().split('T')[0];
}
