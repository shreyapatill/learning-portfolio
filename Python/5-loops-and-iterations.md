# Loops and Iterations

## Python Loops

### Types of Loops

- **while loops**
- **for loops**

## While Loop

- Executes a set of statements as long as a condition is true.

### Basic While Loop

```python
i = 1
while i < 6:
    print(i)
    i += 1
# Output: 1, 2, 3, 4, 5
```

- Requires an indexing variable, initialized before the loop.

### Break Statement

- Stops the loop even if the condition is true.

```python
i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1
# Output: 1, 2, 3
```

### Continue Statement

- Skips the current iteration and continues with the next.

```python
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)
# Output: 1, 2, 4, 5, 6
```

### Else Statement

- Executes a block of code when the condition is no longer true.

```python
i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i is no longer less than 6")
# Output: 1, 2, 3, 4, 5, i is no longer less than 6
```

## For Loop

- Iterates over a sequence (list, tuple, dictionary, set, or string).

### Basic For Loop

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
# Output: apple, banana, cherry
```

### Looping Through a String

- Strings are iterable objects containing a sequence of characters.

```python
for x in "banana":
    print(x)
# Output: b, a, n, a, n, a
```

### Break Statement

- Stops the loop before it has looped through all the items.

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        break
    print(x)
# Output: apple
```

### Continue Statement

- Skips the current iteration and continues with the next.

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)
# Output: apple, cherry
```

### Range Function

- Loops through a set of code a specified number of times.

```python
for x in range(6):
    print(x)
# Output: 0, 1, 2, 3, 4, 5
```

- Specify starting value:

```python
for x in range(2, 6):
    print(x)
# Output: 2, 3, 4, 5
```

- Specify increment value:

```python
for x in range(2, 30, 3):
    print(x)
# Output: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29
```

### Else in For Loop

- Executes a block of code when the loop is finished.

```python
for x in range(6):
    print(x)
else:
    print("Finally finished!")
# Output: 0, 1, 2, 3, 4, 5, Finally finished!
```

- Else block will not execute if the loop is stopped by a break statement.

```python
for x in range(6):
    if x == 3:
        break
    print(x)
else:
    print("Finally finished!")
# Output: 0, 1, 2
```

### Nested Loops

- A loop inside a loop.

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)
# Output: red apple, red banana, red cherry, big apple, big banana, big cherry, tasty apple, tasty banana, tasty cherry
```

### Pass Statement

- For loops cannot be empty. Use `pass` to avoid errors.

```python
for x in [0, 1, 2]:
    pass
# Output: nothing
```

## Python Iterators

### Iterator Basics

- An object that contains a countable number of values.
- Implements the iterator protocol, which includes the methods `__iter__()` and `__next__()`.

### Iterable vs Iterator

- Lists, tuples, dictionaries, and sets are iterable objects.
- Use `iter()` to get an iterator.

```python
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))
# Output: apple, banana, cherry
```

### Looping Through an Iterator

- Use a for loop to iterate through an iterable object.

```python
mytuple = ("apple", "banana", "cherry")
for x in mytuple:
    print(x)
# Output: apple, banana, cherry
```

### Creating an Iterator

- Implement `__iter__()` and `__next__()` methods.

```python
class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        x = self.a
        self.a += 1
        return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
# Output: 1, 2, 3
```

### StopIteration

- Use `StopIteration` to prevent infinite iteration.

```python
class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
    print(x)
# Output: 1, 2, 3, ..., 20
```
