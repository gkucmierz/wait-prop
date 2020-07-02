# wait-prop

### Motivation

Sometimes there is need to use not corectly prepared **library** or there is need to **wait** for **properties** that will **appear** in some object in not specified time in future.
Using [Proxy](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Proxy) is **not solving** problem if we are waiting for properties in **window** object for example.
This function **solves** this problem a little dirt, but **effective** way.

### Install
```bash
npm i wait-prop --save
```

### Using
```js
import { waitProp } from 'wait-prop';

const getGlobal = () => window || this;

// wait for library
waitProp(getGlobal(), 'exampleLib').then(lib => {
  console.log('Library loaded:', lib);
});

// simulate loading library after 1 second
setTimeout(() => {
  getGlobal().exampleLib = {
    exampleMethod: () => []
  }
}, 1e3);
```
