/*  Pick object keys and values 
    based on array of keys
*/
export function pickFromObject<T extends {}, K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  keys.forEach((key) => {
    result[key] = object[key];
  });

  return result;
}

/*  Omit object keys and values 
    based on array of keys
*/
export function omitFromObject<T extends {}, K extends keyof T>(
  object: T,
  keys: K[]
): Omit<T, K> {
  const result: { [key in string]: any } = {};

  Object.keys(object).forEach((key) => {
    if (!keys.includes(key as K)) {
      result[key] = object[key as K];
    }
  });

  return result as Omit<T, K>;
}
