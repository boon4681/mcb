# MCB Language
> A language for minecraft mcfunction

MCB is a programming language that compiles to mcfunctions. 

## ⚠️ Be constructing ... move to typescript

|     | status                                                  |
| --- | ------------------------------------------------------- |
| ✅   | Done, just done what are you looking for?               |
| ✳️   | WIP / work in process / whatever you called.            |
| ✴️   | Pending (can change anytime cuz i'm not working on it yet.) |
| ❌   | Unassigned not now but i'll do                          |

### Not included to Todo lists cuz it need to complete to make this project fulfill
* ✴️ files generator.
* ❌ mcfunction syntax checking.
* ✅ adding all minecraft commands.

### Todo lists
```lua
✅ adding if statement

if block ~ ~ ~ #log and x[i] matches 1..5:
 <some code>
end

------------------------------------
✅ adding score variable declaration

   # x:score <criteria> <name>

------------------------------------
✴️ adding storage operation

   # a:list = ['boon','4681']
   # b:map = {'hi':5}
   b.hi = a[1]

------------------------------------
✴️ adding "call" keyword to call mcb that was auto generate (to make code organized)

   call "boon4681:main.mcb"

------------------------------------
✅ adding "while" and "repeat until"

   while <expression>:
   <some code>
   end

   repeat:
   <some code>
   until <expression>

------------------------------------
✴️ adding "for" keyword to auto loop by range -> example

   for x[i] in 1..10:
   end

------------------------------------
✴️ adding "clock" keyword to schedule function -> example

   clock 10t :
   end

------------------------------------
✴️ adding modifiers like (load / tick ) to trigger function -> example

   load fun main:  | tick fun main:
   end             | end

❌ adding poly-fills like (sin / cos / tan / sqrt)
❌ additional obfustication
   - obfusticated functions
   - obfusticated variables
```