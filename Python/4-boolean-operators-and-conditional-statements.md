# Boolean, Operators, and Conditional Statements

## Booleans

### Boolean Values

- Represent one of two values: `True` or `False`.

### Evaluating Expressions

- Compare values to get `True` or `False`.
  ```python
  print(10 > 9)  # True
  print(10 == 9)  # False
  print(10 < 9)  # False
  ```
- Used in `if` statements:
  ```python
  a = 200
  b = 33
  if b > a:
      print("b is greater than a")
  else:
      print("b is not greater than a")
  ```

### Evaluating Values and Variables

- Use `bool()` to evaluate any value:
  ```python
  print(bool("Hello"))  # True
  print(bool(15))       # True
  ```
- Most values are `True`, except empty values (`"", (), [], {}`, 0, `None`).

### Functions Returning Boolean

- Functions can return boolean values:

  ```python
  def myFunction():
      return True

  print(myFunction())  # True
  ```

- Execute code based on boolean function return:
  ```python
  if myFunction():
      print("YES!")
  else:
      print("NO!")
  ```
- `isinstance()` checks if an object is a certain type:
  ```python
  x = 200
  print(isinstance(x, int))  # True
  ```

## Python Operators

### Arithmetic Operators

- Perform common mathematical operations:
  | Operator | Name | Example |
  | -------- | -------------- | -------- |
  | + | Addition | x + y |
  | - | Subtraction | x - y |
  | \* | Multiplication | x \* y |
  | / | Division | x / y |
  | % | Modulus | x % y |
  | \*\* | Exponentiation | x \*\* y |
  | // | Floor Division | x // y |

### Assignment Operators

- Assign values to variables:
  | Operator | Example | Same As |
  | --- | --- | --- |
  | = | x = 5 | x = 5 |
  | += | x += 3 | x = x + 3 |
  | -= | x -= 3 | x = x - 3 |
  | _= | x _= 3 | x = x \* 3 |
  | /= | x /= 3 | x = x / 3 |
  | %= | x %= 3 | x = x % 3 |
  | //= | x //= 3 | x = x // 3 |
  | **= | x **= 3 | x = x \*\* 3 |
  | &= | x &= 3 | x = x & 3 |
  | \|= | x \|= 3 | x = x \| 3 |
  | ^= | x ^= 3 | x = x ^ 3 |
  | >>= | x >>= 3 | x = x >> 3 |
  | <<= | x <<= 3 | x = x << 3 |
  | := | x := 3 | x = 3 |

### Comparison Operators

- Compare two values:
  | Operator | Name | Example |
  | -------- | ------------------------ | ------- |
  | == | Equal | x == y |
  | != | Not equal | x != y |
  | > | Greater than | x > y |
  | < | Less than | x < y |
  | >= | Greater than or equal to | x >= y |
  | <= | Less than or equal to | x <= y |

### Logical Operators

- Combine conditional statements:
  | Operator | Description | Example |
  | -------- | --------------------------------------------- | --------------------- |
  | and | Returns True if both statements are true | x < 5 and x < 10 |
  | or | Returns True if one of the statements is true | x < 5 or x < 4 |
  | not | Reverses the result | not(x < 5 and x < 10) |

### Identity Operators

- Compare objects to see if they are the same:
  | Operator | Description | Example |
  | -------- | ------------------------------------------------------ | ---------- |
  | is | Returns True if both variables are the same object | x is y |
  | is not | Returns True if both variables are not the same object | x is not y |

### Membership Operators

- Test if a sequence is present in an object:
  | Operator | Description | Example |
  | -------- | -------------------------------------------------------------------------------- | ---------- |
  | in | Returns True if a sequence with the specified value is present in the object | x in y |
  | not in | Returns True if a sequence with the specified value is not present in the object | x not in y |

### Bitwise Operators

- Compare (binary) numbers:
  | Operator | Name | Description | Example |
  | -------- | -------------------- | ------------------------------------------------------------------ | ------- |
  | & | AND | Sets each bit to 1 if both bits are 1 | x & y |
  | \| | OR | Sets each bit to 1 if one of two bits is 1 | x \| y |
  | ^ | XOR | Sets each bit to 1 if only one of two bits is 1 | x ^ y |
  | ~ | NOT | Inverts all the bits | ~x |
  | << | Zero fill left shift | Shift left by pushing zeros in from the right | x << 2 |
  | >> | Signed right shift | Shift right by pushing copies of the leftmost bit in from the left | x >> 2 |

### Operator Precedence

- Determines the order in which operations are performed.
  - Parentheses have the highest precedence.
  - Example:
    ```python
    print((6 + 3) - (6 + 3))  # Output: 0
    print(100 + 5 * 3)        # Output: 115
    ```
- Precedence order (highest to lowest):
  | Operator | Description |
  | ----------------------------------- | ------------------------------------------------- |
  | () | Parentheses |
  | \*\* | Exponentiation |
  | +x -x ~x | Unary plus, unary minus, and bitwise NOT |
  | \* / // % | Multiplication, division, floor division, modulus |
  | + - | Addition and subtraction |
  | << >> | Bitwise left and right shifts |
  | & | Bitwise AND |
  | ^ | Bitwise XOR |
  | \| | Bitwise OR |
  | == != > >= < <= is is not in not in | Comparisons, identity, and membership operators |
  | not | Logical NOT |
  | and | AND |
  | or | OR |

## Python Conditional Statements

### `if` Statements

- Used to evaluate conditions and execute code based on the result.
  ```python
  a = 33
  b = 200
  if b > a:
      print("b is greater than a")
  ```

### Indentation

- Python relies on indentation to define scope.
  ```python
  if b > a:
      print("b is greater than a")
  ```

### `elif`

- Used when the previous condition is not true.
  ```python
  a = 33
  b = 33
  if b > a:
      print("b is greater than a")
  elif a == b:
      print("a and b are equal")
  ```

### `else`

- Catches anything not caught by preceding conditions.
  ```python
  a = 200
  b = 33
  if b > a:
      print("b is greater than a")
  else:
      print("b is not greater than a")
  ```

### Short Hand `if`

- One-line `if` statement:
  ```python
  a = 200
  b = 33
  if a > b: print("a is greater than b")
  ```

### Short Hand `if ... else`

- One-line `if ... else` statement:
  ```python
  a = 2
  b = 330
  print("A") if a > b else print("B")
  ```

### `and`, `or`, `not`

- Combine conditional statements:

  ```python
  if a > b and c > a:
      print("Both conditions are True")

  if a > b or a > c:
      print("At least one condition is True")

  if not a > b:
      print("a is NOT greater than b")
  ```

### Nested `if`

- `if` statements inside `if` statements:
  ```python
  x = 41
  if x > 10:
      print("Above ten,")
      if x > 20:
          print("and also above 20!")
      else:
          print("but not above 20.")
  ```

### The `pass` Statement

- Use `pass` to avoid errors in an empty `if` statement:
  ```python
  a = 33
  b = 200
  if b > a:
      pass
  ```
