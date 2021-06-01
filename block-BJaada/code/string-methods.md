Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter: don't need index
- Return: charater in upper case (string data type)
  -Example:

```js
let name = "ritik dhingra";
name.touppercase(); // "RITIK DHINGRA"
```

3. `toLowerCase`

- Parameter: don't need index
- Return: charater in lower case (string data type)
  -Example:

```js
let name = "RITIK DHINGRA";
name.tolowercase(); // "ritik dhingra"
```

4. `trim`

- Parametr: don't need parameter
  -Retrun: remove extra space
- Example:

```js
let hello = "     hello world   ";
hello.trim(); // "hello world"
```

5. `trimEnd`

- Parametr: don't need parameter
  -Retrun: remove extra space from start
- Example:

```js
let hello = "     hello world   ";
hello.trim(); // "hello world   "
```

6. `trimStart`

- Parametr: don't need parameter
  -Retrun: remove extra space from end
- Example:

```js
let hello = "     hello world    ";
hello.trim(); // "    hello world"
```

7. `concat`

- Parametr: its accept the parameter
  -Retrun: return the a string with concat
- Example:

```js
let name = "Ritik";
let surname = "dhinhra";
name.concat(" ", surname); // ritik dhingra
```

8. `endsWith`

- Parametr: its accept the parameter and we can pass any value
  -Retrun: true or false
- Example:

```js
let name = "Ritik";
name.endwith(ik); // true
name.endwith(jhg); // false
```

9. `includes`

- Parametr: its accept the parameter or accept the value
  -Retrun: return the true or false weither the value is present on that string or not
- Example:

```js
let name = "Ritik";
name.includes("R"); // true
```

10. `indexOf`

- Parametr: its accept the parameter
  -Retrun: its return the specific value
- Example:

```js
let name = "Ritik is a good boy ";
name.indexof(good); // 10
name.indexof(xyz); // -1

("if parameter dosen't exist its showing -1.");
```

11. `lastIndexOf`

- Parametr: its accept the parameter
  -Retrun: its return the specific value but the last value
- Example:

```js
let name = "Ritik is a good boyi ";
name.lastindexof(i); // 2
name.lastindexof(i); // 20
```

("if parameter dosen't exist its showing -1.");
12`padEnd`;

- Parametr: its accept the parameter
  -Retrun: its return the padding in end
- Example:

```js
let name = "Ritik ";
name.padEnd("20", "."); // ritik...............
```

13`padStart`;

- Parametr: its accept the parameter
  -Retrun: its return the padding in start
- Example:

```js
let name = "Ritik ";
name.padStart("20", "."); // ...............ritik
```

14`repeat`;

- Parametr: its accept the parameter
  -Retrun: its return repeat word
- Example:

```js
let name = "Ritik ";
name.repeat(3); // ritikritikritik
```

15`replace`;
Parametr: its accept two parameter
-Retrun: its return replace word

- Example:

```js
let name = "Ritik ";
name.replace("ritik", "dhingra"0); // dhingra
```

16`slice`;
-Parametr: its accept two parameter but the second is optional
-Retrun: its return string

- Example:

```js
let name = "Ritik is the good";
name.slice("o", "11"); //  ritik is goo
```

17`split`;
-Parametr: its accept two parameter but the second is optional
-Retrun: its return string

- Example:

```js
let name = "Ritik is the good";
name.slice(" "); //  "ritik" "is" "the" "good"
```

18`substring`;
-Parametr: its accept two parameter but the second is optional
-Retrun: its return string

- Example:

```js
let name = "Ritik is the good";
name.substring("o", "11"); //  ritik is goo
name.substring("11", "0"); //   ritik is goo
```
