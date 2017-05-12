# Kvid
Kvid is a javascript library for generating random id strings that can be used for user-visible tokens or ids.

It skips the letters O and 1 and the numbers 0 and l by default, as they are visually confusing in some fonts and 
kvid is designed to include the scenario of a user typing in a token by hand. 
  


### Name
"K" to signify it is a supporting library for Kahba, and "vid" for visible id.
  
  
## Usage

`npm install --save kvid`

```
import buildVid from 'kvid';

const myVid = buildVid(6);  // #  returns something like  "abc123" 
```
