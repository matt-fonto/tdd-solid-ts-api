## SOLID

Software more: flexbile, robust, reusable, maintainable, testable.
Software less: fragile, rigid, breakable

1. Single Responsibility Principle (SRP)
   Separate things that change for different reasons.

2. Open/Closed Principle (OCP)
   Open for extension, closed for modification.

3. Liskov Substitution Principle (LSP)
   Subtypes must be substitutable for their base types.
   If S (Guitar, Amplifier, Cable) is a subtype of T (Item), then we should be able to replace instances of T (Item) with instance of S (Guitar, Amplifier, Cable) without breaking the program.

- Preconditions cannot be strengthened: I break this rule in case I stop accepting entrances that my superclass accepts.
- Postconditions cannot be weakened: I break this rule in case I stop returning the same type of my superclass.
- Invariants must be conserved: I break this rule in case I change the state of my superclass.

4. Interface Segregation Principle (ISP)
   Be careful with interfaces that are too broad. Don't force the subclasses to implement methods that they don't need.

5. Dependency Inversion Principle (DIP)
   High-level modules should not depend on low-level modules. Both should depend on abstractions.
