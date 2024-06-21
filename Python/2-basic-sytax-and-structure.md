# Basic Syntax and Structure

## Python Variables

### Creating Variables

- **Assignment**:

  - Variables are created when a value is assigned.
  - No need for explicit declaration.

  ```python
  x = 5
  y = "Hello, World!"
  ```

- **Dynamic Typing**:
  - Variables can change type after assignment.
  ```python
  x = 4       # x is an integer
  x = "Sally" # x is now a string
  ```

### Variable Naming Rules

- **Valid Names**:

  - Must start with a letter or underscore.
  - Cannot start with a number.
  - Can only contain alphanumeric characters and underscores.
  - Case-sensitive.

  ```python
  myvar = "John"
  my_var = "John"
  _my_var = "John"
  myVar = "John"
  MYVAR = "John"
  myvar2 = "John"
  ```

- **Invalid Names**:
  ```python
  2myvar = "John"
  my-var = "John"
  my var = "John"
  ```

### Multi-word Variable Names

- **Camel Case**:
  - `myVariableName`
- **Pascal Case**:
  - `MyVariableName`
- **Snake Case**:
  - `my_variable_name`

### Assigning Values

- **Multiple Values to Multiple Variables**:

  ```python
  x, y, z = "Orange", "Banana", "Cherry"
  ```

- **One Value to Multiple Variables**:

  ```python
  x = y = z = "Orange"
  ```

- **Unpacking a Collection**:
  ```python
  fruits = ["apple", "banana", "cherry"]
  x, y, z = fruits
  ```

### Output Variables

- **Using `print()`**:

  - Output multiple variables separated by commas.
  - Combine variables with `+`.

  ```python
  x = "Python"
  y = "is"
  z = "awesome"
  print(x, y, z)    # Output: Python is awesome
  print(x + y + z)  # Output: Pythonisawesome
  ```

- **For numbers, `+` works as an operator**:

  ```python
  x = 5
  y = 10
  print(x + y)  # Output: 15
  ```

- **Combining strings and numbers in `print()`**:
  ```python
  x = 5
  y = "John"
  print(x, y)  # Output: 5 John
  ```

### Global Variables

- **Defined outside any function and accessible globally**.

  ```python
  x = "awesome"

  def myfunc():
      print("Python is " + x)

  myfunc()  # Output: Python is awesome
  ```

- **Local Variable with Same Name**:

  ```python
  x = "awesome"

  def myfunc():
      x = "fantastic"
      print("Python is " + x)

  myfunc()
  # Output: Python is fantastic
  print("Python is " + x)
  # Output: Python is awesome
  ```

- **Using `global` keyword**:

  ```python
  def myfunc():
      global x
      x = "fantastic"

  myfunc()
  print("Python is " + x)
  # Output: Python is fantastic
  ```

## Python Comments

### Single-line Comments

- **Start with `#`:**

  ```python
  # This is a comment
  print("Hello, World!")
  ```

- **Inline Comments**:
  ```python
  print("Hello, World!")  # This is a comment
  ```

### Multiline Comments

- **Multiple `#` lines**:

  ```python
  # This is a comment
  # written in
  # more than one line
  ```

- **Triple quotes (as a string)**:
  ```python
  """
  This is a comment
  written in
  more than one line
  """
  print("Hello, World!")
  ```

## Python Data Types

### Built-in Data Types

- **Text Type**:
  - `str`
- **Numeric Types**:
  - `int`, `float`, `complex`
- **Sequence Types**:
  - `list`, `tuple`, `range`
- **Mapping Type**:
  - `dict`
- **Set Types**:
  - `set`, `frozenset`
- **Boolean Type**:
  - `bool`
- **Binary Types**:
  - `bytes`, `bytearray`, `memoryview`
- **None Type**:
  - `NoneType`

### Getting and Setting Data Types

- **Using `type()` function**:

  ```python
  x = 5
  print(type(x))  # Output: <class 'int'>
  ```

- **Setting specific data types using constructor functions**:
  ```python
  x = str("Hello World")
  y = int(20)
  z = float(20.5)
  w = complex(1j)
  ```
