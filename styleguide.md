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