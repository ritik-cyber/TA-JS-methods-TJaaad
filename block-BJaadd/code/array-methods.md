Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- parametr: it accept the the number,string
- return: a number or string with join
  Example:

```js
let number = [1, 3, 4, 5];
numbers.join(""); // "1 2 3 4 5"
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.join(" "); // "A" "quick" "brown" "'fox' 'jumped' 'over' 'a' 'lazy'
let colors = ["red", "green", "blue"];
colors.join(""); // "red green blue"
```

join - join accept a string or space to join togther it can be number or string array obj

3. `flat`

- parameter:

4. `push`

- parameter: it accept anything string bollean number
- reutrn: its push the value in array
- Example:

```js
let number = [1, 3, 4, 5];
number.push(89); // [1,3,4,5,89]

let fruitName = ["apple", "mango", "banana"];
fruitName.push("grapes"); // ["apple", "mango", "banana", "grapes"]
```

-push: bacailly its push the element into thr array and it can be anything string bollean number etc

5. `indexOf`

- parameter: its accept the alphabat then tell the first index
- return: its tell the first index of an array
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.indexOf("u"); // 3
```

6. `lastIndexOf`

- parameter: its accept the alphabat then tell the first index
- return: its tell the last index of an array
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.indexOf("a"); // 33
```

7. `includes`

- parameter: its accepts the element which present in the array
- return: its return true or false
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.indexOf("brown"); // true
sentanceArray.indexOf("lazy"); // true
sentanceArray.indexOf("xyz"); // false
```

8. `reverse`

- parameter: its accept the number
- return: its reverse the array
- Example:

```js
let number = [1, 3, 4, 5];
number.reverse(); // [5,4,3,1]
```

9. `every`

- parameter: its accepts the element which present in the array
- return: its return true or false on the base of every element which present in array
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.evry("n"); // flase
sentanceArray.eveyr("a"); // flase
```

10. `shift`

- parameter:
- return: its remove the first index element from the array
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.shift(); // A
sentenceArray; // quick brown fox jumped over a lazy
let number = [1, 2, 3, 4, 5];
number.shift(); // 5
```

11. `splice`

- parameter:
- return: its remove the first index element from the array
- Example:

```js
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.splice(1, 0'feb'); //
sentenceArray; // quick brown fox jumped over a lazy
let number = [1, 2, 3, 4, 5];
number.shift(); // 5
```

12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
