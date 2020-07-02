
const DELAY = 50;

// export const waitProp = 123;

export const waitProp = (object: any, property: string, delay = DELAY) => {
  return new Promise(resolve => {
    const loop = () => {
      if (property in object) {
        resolve(object[property]);
      } else {
        setTimeout(loop, delay);
      }
    };
    loop();
  })
};
