<p align="center"><img width="160px" src="https://media.discordapp.net/attachments/558622428754870272/1002233396099039333/mcb.png"/></p>

<h1 align="center">MCB-Language</h1>

  <p align="center">A lightweight scripting language that compiles in to mcfunction.</p>
    <p align="center">
    <a href="https://www.npmjs.com/package/mcb-lang" target="_blank">
      <img src="https://img.shields.io/npm/v/mcb-lang.svg"/>
    </a>
    <a href="https://opensource.org/licenses/MIT" target="_blank">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg"/>
    </a>
    </p>
</p>

## Description

**MCB** stand for Mincraft Boon. MCB is a lightweight scripting language that compiles in to mcfunction. It support functional programming, giving power to make your coding process faster.

### Why build MCB?

Cuz mcfunction suck so i build MCB but trust me.... there is no cure.

## Get Started

Requirements:

```yaml
node js >=v16.0.0
```

### Installation

```bash
# install with npm
npm install -g mcb-lang
# install with yarn
yarn global add mcb-lang
```

### Creating project

```bash
mcb init
```

## Powerful CLI

```bash
# want help?
mcb help
   
# initialize project.
mcb init

# build project.
mcb build or mcb .

# tools for project configs and more.
mcb mk or mcb make
```

## Basic syntax

### Variables

MCB is a statically typed language. This means that variables do have types in declaration.

Basic declaration
> Restrict area no floating variables allowed.

```ts
// Format
let <objective>:score <criteria> <displayname>

// Usage
let foo:score dummy
let bar:score air Boon
```

Compiled code

```mcfunction
scoreboard objectives add foo dummy
```

Set value in variable

```ts
// Format
<scoreboard_objective>[<target>] = value

// Usage
foo[x] = 10
bar[@s] = 5
```

Compiled code

```mcfunction
scoreboard players set x foo 10
scoreboard players set @s bar 5
```

### Print out the output

```kotlin
print("hi ${x[0]}")
```

### Conditional expressions

```kotlin
fun hello(){
   x[a] = 0
   if(x[a]=0){
      print("hello")
   }else{
      print("hi")
   }
}
```

### for loop

```kotlin
for(x[i] in 1..5;1){
   say hi
}
```

### while loop

```kotlin
x[a] = 5
while(x[a]>0){
   print("while 1 ${x[a]}")
   x[a]-=1
}
```

### Functions

Input parameters is not support in this version. return output too. 😎

> A Function with no Input
>
>```kotlin
>fun hello(){
>   say hello
>}
>
>// this is how you can call function.
>hello()
>```

#### Function Modifiers

`load` means that the function is run after the datapack has loaded, triggered by `minecraft:tags\functions\load.json`

```kotlin
// you will got a message in your minecraft chat after the datapack was loaded.
load fun hi_at_start(){
   print("HI")
}
```

`tick` means that the function is run every tick by `minecraft:tags\functions\tick.json` trigger.

```kotlin
// you will got a hi message in your minecraft chat every tick
tick fun hi_every_tick(){
   say hi
}
```

`load` and `tick` combo

```kotlin
// you will got a hi message in your minecraft chat every tick and on loaded.
tick load fun hey(){
   say hi
}

// you will got a hello message in your minecraft chat every tick and on loaded.
load tick fun hello(){
   say hello
}
```

## Folder structure

All of Project-Files in here. MCB used folder structure following by this 3 words.

\<namespace> → `mcbpack.json` + Your Project-Files

```md
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

`mcbpack.json` file is a configuration file specifies The root files and compiler options to let The MCB compiler compile projects.

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
