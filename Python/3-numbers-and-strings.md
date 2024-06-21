# Numbers and Strings

## Python Numbers

### Numeric Types

- **Types**:

  - `int`: Whole numbers, positive or negative, without decimals.
  - `float`: Numbers containing one or more decimals.
  - `complex`: Numbers with an imaginary part, written with a “j”.

- **Example**:
  ```python
  x = 1        # int
  y = 2.8      # float
  z = 1j       # complex
  ```

### Type Verification

- **Using `type()`**:
  ```python
  print(type(x))  # Output: <class 'int'>
  print(type(y))  # Output: <class 'float'>
  print(type(z))  # Output: <class 'complex'>
  ```

### Type Conversion

- **Convert Types**:

  - `int()`, `float()`, and `complex()` methods to convert between types.
  - **Example**:

    ```python
    x = 1         # int
    y = 2.8       # float
    z = 1j        # complex

    a = float(x)  # 1.0
    b = int(y)    # 2
    c = complex(x) # (1+0j)
    ```

- **Note**: Cannot convert complex numbers into another type.

### Random Numbers

- **Using `random` module**:
  ```python
  import random
  print(random.randrange(1, 10))  # Output: Random number between 1 and 9
  ```

## Python Strings

### String Basics

- **Creation**:

  - Strings can be created with single or double quotes.

  ```python
  print("Hello")
  print('Hello')
  ```

- **Quotes Inside Strings**:
  ```python
  print("It's alright")
  print('He is called "Johnny"')
  ```

### Multiline Strings

- **Using Triple Quotes**:
  ```python
  a = """Lorem ipsum dolor sit amet,
  consectetur adipiscing elit."""
  print(a)
  ```

### Strings as Arrays

- **Accessing Characters**:

  ```python
  a = "Hello, World!"
  print(a[1])  # Output: e
  ```

- **Looping Through Strings**:
  ```python
  for x in "banana":
      print(x)
  ```

### String Length

- **Using `len()`**:
  ```python
  a = "Hello, World!"
  print(len(a))  # Output: 13
  ```

### Check Substrings

- **Using `in`**:

  ```python
  txt = "The best things in life are free!"
  print("free" in txt)  # Output: True
  ```

- **Using `not in`**:
  ```python
  txt = "The best things in life are free!"
  print("expensive" not in txt)  # Output: True
  ```

### String Slicing

- **Slice Syntax**:

  - `string[start:end]`

  ```python
  b = "Hello, World!"
  print(b[2:5])  # Output: llo
  ```

- **Slice from Start**:

  ```python
  print(b[:5])  # Output: Hello
  ```

- **Slice to End**:

  ```python
  print(b[2:])  # Output: llo, World!
  ```

- **Negative Indexing**:
  ```python
  print(b[-5:-2])  # Output: orl
  ```

### Modifying Strings

- **Upper Case**:

  ```python
  a = "Hello, World!"
  print(a.upper())  # Output: HELLO, WORLD!
  ```

- **Lower Case**:

  ```python
  print(a.lower())  # Output: hello, world!
  ```

- **Strip Whitespace**:

  ```python
  a = " Hello, World! "
  print(a.strip())  # Output: Hello, World!
  ```

- **Replace String**:

  ```python
  print(a.replace("H", "J"))  # Output: Jello, World!
  ```

- **Split String**:
  ```python
  print(a.split(","))  # Output: ['Hello', ' World!']
  ```

### String Concatenation

- **Using `+` Operator**:
  ```python
  a = "Hello"
  b = "World"
  c = a + " " + b
  print(c)  # Output: Hello World
  ```

### String Formatting

- **Using f-strings**:

  ```python
  age = 36
  txt = f"My name is John, I am {age}"
  print(txt)  # Output: My name is John, I am 36
  ```

- **With Modifiers**:
  ```python
  price = 49.99
  txt = f"The price is {price:.2f} dollars"
  print(txt)  # Output: The price is 49.99 dollars
  ```

### Escape Characters

- **Common Escape Characters**:

  - `\'`: Single Quote
  - `\\`: Backslash
  - `\n`: New Line
  - `\r`: Carriage Return
  - `\t`: Tab
  - `\b`: Backspace
  - `\f`: Form Feed
  - `\ooo`: Octal value
  - `\xhh`: Hex value

- **Example**:
  ```python
  txt = "We are the so-called \"Vikings\" from the north."
  print(txt)  # Output: We are the so-called "Vikings" from the north.
  ```

### String Methods

- **Common Methods**:
  - `capitalize()`: Converts first character to upper case.
  - `casefold()`: Converts string into lower case.
  - `center()`: Returns a centered string.
  - `count()`: Returns the number of times a specified value occurs in a string.
  - `find()`: Searches the string for a specified value and returns the position.
  - `format()`: Formats specified values in a string.
  - `join()`: Joins elements of an iterable into a string.
  - `lower()`: Converts string into lower case.
  - `replace()`: Returns a string where a specified value is replaced.
  - `split()`: Splits the string at the specified separator, returns a list.
  - `strip()`: Returns a trimmed version of the string.
  - `upper()`: Converts string into upper case.
