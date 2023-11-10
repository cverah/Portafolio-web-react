import { format, parse } from "date-fns";
import { es } from "date-fns/locale";

//formato day-month-year 01/01/2023
export function date_conversion(dateString) {
  // Parsea la cadena de fecha al objeto Date
  const date = parse(dateString, "yyyy-MM-dd", new Date());

  // Formatea la fecha en el formato deseado
  const dateConvert = format(date, "dd 'de' MMMM 'del' yyyy", {
    locale: es,
  });

  return dateConvert;
}
