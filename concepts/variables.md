# Variables

MCB is a statically typed language. This means that variables do have types in declaration.

## Scoreboard

**Basic Declaration:**

```ts
// Format
let objective:score<minecraft:criteria>

// Example
let foo:score<dummy>
```

Compiled code:

```mcfunction
scoreboard objective add foo dummy
```

**Declared with DisplayName:**

```ts
// Format
let objective:score<minecraft:criteria> as DisplayName

// Example
let bar:score<dummy> as Boon
```

## Integer

**Basic Declaration (Selector):**

```ts
// Format
let variable_name:int<objective> = value

// Example
let foo:score<dummy> // Declare scoreboard
let zero:int<foo> = 0 // Declare integer value 0
let just_a_number:int<foo> = 20 // Declare integer value 20
let as_bar:int<foo> as bar = -10 // Declare integer value -10 as bar
```

Compiled code:

```mcfunction
scoreboard objective add foo dummy
scoreboard players set zero foo 0
scoreboard players set just_a_number foo 20
scoreboard players set bar foo 20
```

**Declared as Entity Selector:**

```ts
// Format
let variable_name:int<objective> as Selector
let variable_name:int<objective> as Selector = value

// Example
let foo:score<dummy> // Declare scoreboard
let zero:int<foo> as @p = 0 // Declare integer value 0
let just_a_number:int<foo> as @p = 20 // Declare integer value 20 as @p
```

Compiled code:

```mcfunction
scoreboard objective add foo dummy
scoreboard players set @p foo 0
scoreboard players set @p foo 20
```

**Assign variable to Selector:**

```ts
// Format
objective<Selector> = variable

// Example
let foo:score<dummy> // Declare scoreboard
let bar:int<foo> = 0 // Declare integer value 0
foo<@p> = bar
```

Compiled code:

```mcfunction
scoreboard objective add foo dummy
scoreboard players set bar foo 0
scoreboard players operations @p foo = bar foo
```

## Array

The represent of Array value in MCB is a sequence of variable in [], but in minecraft you can not access with the array directly so MCB have a Built-in function to do it for you.

Example : `["a","b","c","d","e"]`, `[1,2,3,4,5]`

**Basic Declaration:**

Default Namespace is mcb.dummy and Default TargetPath will be eran

```ts
// Format
let variable_name:array = []

// Example
let bar:array
```

```ts
// Format
let variable_name:array<Namespace> as TargetPath = []

// Example
let bar:array<foo> as hello = []
let ree:array<woo> as me.hi = []
```

Compiled code:

```mcfunction
data modify storage foo hello set value []
```
