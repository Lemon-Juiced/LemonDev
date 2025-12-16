# Lemon Dev Code Style Guide
Behold **The** ***n*** **Commandments**!

## Brace Placement
Never put the opening brace on its own line for control statements or function declarations; keep the `{` on the same line as the statement.

```java
// Bad: The brace on its own line
if (ready)
{
    start();
}

// Good: The brace on the same line as the statement
if (ready) {
    start();
}
```

## Code Block Spacing
Group similar lines together and separate different logical groups with a single blank line. Use indentation to express structure (blocks/scopes), not to create visual separation.

```java
// Setup / Initialization (a related group)
config.load();
db.connect();
cache.init();

// Worker Setup (a related group)
worker.prepare();
worker.start();

// Actions (a different, logically separate group)
for (int i = 0; i < workers.length; i++) {
    workers[i].run();
}
```

## For Loops
Do not use enhanced for loops or for each loops, they are inherently less readable and offer less strict control than a traditional for loop.

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
Single-line if/else chains are allowed, but only when the logic is simple, in other cases divert to normal if-else chains or switches where applicable.
```java
if (ready) start();
else if (waiting) wait();
else fail();
```

## Ternary Operations
Do not use ternary operations or the ternary operator.  
These are far too terse to be readable.  
Divert to other options.  

## Variable Naming
When naming variables, especially those that are case sensitive, ensure use of proper case. For example, it is `ID` not `Id`. This is because it is initialism pronounced as letters rather than a word, the correct and unambiguous form is ID.  

```java
// Correct
String userID;

// Incorrect
String userId;
```