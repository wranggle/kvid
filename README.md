# Kvid
Generates random id strings that can be used for user-visible tokens or ids.

It skips the letters O and 1 and the numbers 0 and l by default, because they are visually confusing in some fonts. 
  


### Name
"K" to signify it is a supporting library for Kahba, and "vid" for visible id.
  
  
## Usage

**NOTE:** an ES2015 version is published to NPM, not an ES5 version.
(todo: perhaps publish kvid.es5)

`npm install --save kvid`

```
import buildVid from 'kvid';

const myVid = buildVid(6);  // #  returns a random string of characters, eg "abc123" 
```

