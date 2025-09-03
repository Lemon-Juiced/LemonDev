# Lemon Dev Code Style Guide

## Indentation
Always indent code inside blocks. No exceptions.

```java
if (condition) {
    // Indented code goes here
    doSomething();
} else {
    // Still indented!
    doSomethingElse();
}
```

## Single Line If-Else Chains
Single-line if/else chains are allowed, but only when the logic is simple.
```java
if (ready) start();
else if (waiting) wait();
else fail();
```