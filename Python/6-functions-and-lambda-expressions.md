# Functions and Lambda Expressions

## Python Functions

### Creating a Function

- Defined using the `def` keyword.
- A block of code that runs only when called.

```python
def my_function():
    print("Hello from a function")
```

### Calling a Function

- Use the function name followed by parentheses.

```python
def my_function():
    print("Hello from a function")

my_function()  # Output: Hello from a function
```

### Function Arguments

- Information can be passed to functions as arguments, specified inside parentheses.
- Example with one argument:

```python
def my_function(fname):
    print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")
# Output: Emil Refsnes, Tobias Refsnes, Linus Refsnes
```

### Parameters vs Arguments

- **Parameter**: Variable listed inside the parentheses in the function definition.
- **Argument**: Value sent to the function when it is called.

### Number of Arguments

- Functions must be called with the correct number of arguments.

```python
def my_function(fname, lname):
    print(fname + " " + lname)

my_function("Emil", "Refsnes")  # Output: Emil Refsnes
```

### Arbitrary Arguments (\*args)

- Use `*` before a parameter name to allow for an unknown number of arguments.

```python
def my_function(*kids):
    print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")  # Output: The youngest child is Linus
```

### Keyword Arguments (kwargs)

- Use key = value syntax to pass arguments.

```python
def my_function(child3, child2, child1):
    print("The youngest child is " + child3)

my_function(child1="Emil", child2="Tobias", child3="Linus")  # Output: The youngest child is Linus
```

### Arbitrary Keyword Arguments (\*\*kwargs)

- Use `**` before a parameter name to allow for an unknown number of keyword arguments.

```python
def my_function(**kid):
    print("His last name is " + kid["lname"])

my_function(fname="Tobias", lname="Refsnes")  # Output: His last name is Refsnes
```

### Default Parameter Value

- Set a default value for a parameter.

```python
def my_function(country="Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")
# Output: I am from Sweden, I am from India, I am from Norway, I am from Brazil
```

### Passing a List as an Argument

- Send any data type to a function and it will be treated as that type.

```python
def my_function(food):
    for x in food:
        print(x)

fruits = ["apple", "banana", "cherry"]
my_function(fruits)
# Output: apple, banana, cherry
```

### Return Values

- Use the `return` statement to return a value from a function.

```python
def my_function(x):
    return 5 * x

print(my_function(3))  # Output: 15
print(my_function(5))  # Output: 25
print(my_function(9))  # Output: 45
```

### The `pass` Statement

- Use `pass` to avoid errors in an empty function.

```python
def my_function():
    pass
```

### Positional-Only Arguments

- Use `/` to specify positional-only arguments.

```python
def my_function(x, /):
    print(x)

my_function(3)  # Output: 3
```

### Keyword-Only Arguments

- Use `*` to specify keyword-only arguments.

```python
def my_function(*, x):
    print(x)

my_function(x=3)  # Output: 3
```

### Combining Positional-Only and Keyword-Only

- Combine both argument types in a function.

```python
def my_function(a, b, /, *, c, d):
    print(a + b + c + d)

my_function(5, 6, c=7, d=8)  # Output: 26
```

### Recursion

- A function that calls itself.

```python
def tri_recursion(k):
    if k > 0:
        result = k + tri_recursion(k - 1)
        print(result)
    else:
        result = 0
    return result

print("Recursion Example Results")
tri_recursion(6)
# Output: 1, 3, 6, 10, 15, 21
```

## Python Lambda

### Lambda Functions

- A small anonymous function with a single expression.

### Syntax

- `lambda arguments: expression`

```python
x = lambda a: a + 10
print(x(5))  # Output: 15
```

### Multiple Arguments

```python
x = lambda a, b: a * b
print(x(5, 6))  # Output: 30
```

### Why Use Lambda Functions?

- Useful as anonymous functions inside other functions.

```python
def myfunc(n):
    return lambda a: a * n

mydoubler = myfunc(2)
print(mydoubler(11))  # Output: 22

mytripler = myfunc(3)
print(mytripler(11))  # Output: 33
```
