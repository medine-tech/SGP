// multiClass => class multiple: permite concatenar múltiples clases de forma dinámica de style en modulo css.
// multiClassStyleModule => class multiple extra: permite concatenar múltiples style module y sus clases.

type typeStyleObj = { [key: string]: string };
type StylesModulesTuple = [typeStyleObj, string[]];

const multiClass = (
  stylesObj: typeStyleObj,
  keysArray: string[],
  className: string = ""
): string => {
  const concatenatedValues = keysArray.map((key) => stylesObj[key]).join(" ");
  return `${concatenatedValues} ${className}`;
};

const multiClassStyleModule = (
  multiKeysArray: StylesModulesTuple[],
  className: string = ""
): string => {
  const concatenatedValues = multiKeysArray
    .map(arrayCM => `${multiClass(arrayCM[0], arrayCM[1])}`)
    .join("");
  return concatenatedValues + className;
};

export const cm = (
  stylesOrKeys: typeStyleObj | StylesModulesTuple[],
  keysOrClassName: string[] | string,
  className: string = ""
): string => {
  if (Array.isArray(stylesOrKeys)) {
    return multiClassStyleModule(stylesOrKeys, className);
  } else {
    return multiClass(stylesOrKeys, keysOrClassName as string[], className);
  }
};

export default cm;
