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
