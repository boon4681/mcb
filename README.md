# MCB-Language

MCB is a lightweight scripting language that compiles in to mcfunction. It support functional programming. It giving power to make your coding process faster.

## Why build MCB?

Cuz mcfunction is suck. so i build this but there is no cure.

## Language Goals

- To make world better with massively processable variables.
- Code that possible to read.

## Project status

MCB is now experiment project that created on my own passion. Nothing more about it.

## Get Started

Clone this respository and start playing with it. Because this language is now experimental so there is no cli to used.

## Basic syntax

### Variables

MCB is a statically typed language. This means that variables do have types in declaration.

### Numbers

MCB support only Integer.
> Restrict area no floating variables allowed.

```ts
// Format
let <objective>:score <criteria> <displayname>

// Usage
let foo:score dummy
let bar:score air Boon
```

Set value in variable

```ts
// Format
<scoreboard_objective>[<target>] = value
// Usage
foo[x] = 10
bar[@e[type=minecraft:chicken,limit=1]] = 5
```

### Functions

> Input parameters is not support in this version.
> return output too. 😎

A Function with no Input

```kotlin
fun hello(){
   say hello
}

// this is how you can call function.
hello()
```

#### Function Modifiers

- `load` means that the function is run after the datapack has loaded, triggered by `minecraft:tags\functions\load.json`

   ```kotlin
   // you will got a message in your minecraft chat after the datapack was loaded
   load fun hi_at_start():
      say hi
   end
   ```

- `tick` means that the function is run every tick by `minecraft:tags\functions\tick.json` trigger.

    ```kotlin
    tick fun hi_every_tick():
      say hi
    end
    
    // you will got a hi message in your minecraft chat every tick
    ```

- `load` and `tick` combo

    ```kotlin
    tick load fun hey():
      say hi
    end // you will got a hi message in your minecraft chat every tick and on loaded
    
    load tick fun hello():
      say hello
    end // you will got a hello message in your minecraft chat every tick and on loaded
    ```

## Folder structure

All of Project-Files in here. MCB used folder structure following by this 3 words.

\<namespace> → `mcbpack.json` + Your Project-Files

```ts
<namespace>
   ├─ +static\ //coming soon
   │        └─ +<Your Static File>
   ├─ +<Your Folder>\
   │        └─ +<Your File>.mcb
   ├─ +<Your File>.mcb
   └─ mcbpack.json
```

### What’s mcbpack.json?

The presence of a `mcbpack.json` file in directory indicates that directory is `root` of MCB Project.

`mcbpack.json` ****file is a configuration file specifies The root files and compiler options to let The MCB compiler compile projects.

#### Example of mcbpack.json

```json
{
   "name": "Hello",
   "mcVersion": 1.17,
   "compiler":{
      "<any-name1>":{
         "root":["/src/**"],
         "output":"/dist",
         "obfusticate": true // comming soon
      },
      "<any-name2>":{
         "root":["/test/**"],
         "output": "/dist-test"
      },
      "<any-name3>":{
         "root":["/src/**","/test/**"],
         "output": "/dist"
      }
   },
   // comming soon
   "dependencies":{
      "warppp": "1.0"
   }
}
```
