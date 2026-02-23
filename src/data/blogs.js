export const blogs = [
  {
    slug: 'hack-alu-day-3-zr-flag',
    title: 'Building the Hack ALU: When zr Refused to Cooperate',
    tag: 'Hardware',
    date: 'January 7, 2026',
    content: `
I'm currently implementing the Hack ALU, and today marked my third day working on it. The task for the day was to get two output pins right: \`zr\` should output 1 when the result of the arithmetic is \`0000 0000 0000 0000\`, and \`ng\` should output 1 when the output is negative.

Figuring out \`ng\` was the easy part. Since the Hack architecture uses two's complement, a negative number simply means the most significant bit is 1. So if \`output[15]\` is 1, the value is negative. That meant I could directly wire \`ng\` to \`output[15]\` and move on without much stress.

\`zr\`, however, was not as friendly. Hack HDL doesn't give you the luxury of comparisons or if statements, so checking whether a 16-bit output is zero requires thinking purely in logic gates. My first idea was to get clever with arithmetic. I thought if a number is zero, then adding it to \`true\` (all 1s) should return all 1s. Since I already had an adder, maybe I could combine it with a multiplexer to detect that case. Very quickly, that approach became messy. After the addition, I had no clean way to check whether the result was all 1s without introducing even more logic. At that point, I knew I was overcomplicating things.

About 30 minutes later, after staring at my HDL file and occasionally fighting off mosquitoes with Killit, the solution finally clicked. To check if a number is zero, I don't need arithmetic at all. I just need to know whether any bit in the output is set. If even one bit is 1, then the value is not zero. If all bits are 0, then it is.

So I used two \`Or8Way\` chips, one for bits 0–7 and another for bits 8–15. I OR'ed the outputs of those two chips together, and if the result was 1, it meant at least one bit was set. I then negated that result and connected it to \`zr\`. If every bit was zero, the OR chain returned 0, the negation flipped it to 1, and \`zr\` behaved exactly as expected.

That moment felt really satisfying. It reminded me that hardware design often rewards simple thinking over clever tricks, and that sometimes the cleanest solution is just going back to basic logic and trusting it to do the job.
    `.trim()
  },
  {
    slug: 'understanding-how-computers-store-a-single-bit',
    title: 'Understanding How Computers Store a Single Bit (From First Principles)',
    tag: 'Hardware',
    date: 'February 2, 2026',
    content: `
This article explains how computer memory stores a single bit, built from first principles. Note: everything discussed here refers to the **logical principles** required to realize this, not the physical implementation.

## Our Simple Goal

We want to build a **one-bit register** that:
- Holds a single value forever
- Changes only when we give it a new input
- Holds that new value forever until we tell it to change again

Before we can fully understand how to build this, let's talk about three key components: **Multiplexers (Mux)**, **Data Flip-Flops (DFF)**, and the **Clock (CLK)**.

---

## The Building Blocks

### 1. Multiplexer (Mux)

The job of a Mux is simple: give it multiple inputs and a selector bit. Based on the selector, it chooses one of the inputs and outputs it.

**In other words:** We give it multiple options and selection criteria. Based on the criteria, it picks one option as the output.

---

### 2. Clock (CLK)

If you know gates like AND, OR, NAND, and Mux, you know they use **combinatorial logic**. This means there's no sense of time—an input produces an output instantaneously (at least in theory).

In reality, we know this isn't true. Operations take time.

When building computers from first principles, the **Clock gives us a sense of time**. It provides a train of cycles within which sequences of tasks take place.

---

### 3. Data Flip-Flop (DFF)

The DFF helps us **hold a value from one clock cycle to the next**. It gives us a basic sense of storage in computers.

Without the DFF, values would simply disappear in the next clock cycle. The DFF prevents this by **remembering** the value.

**Key insight:** If we somehow connect the output of the DFF back to its input, it will hold that value forever.

---

## But That's Not Enough

Holding a value forever isn't our goal. We want to **change the value** when needed.

Specifically:
- When \`load = 1\`: Feed the new input to the DFF
- When \`load = 0\`: Keep the DFF holding its current value

**In other words:** Based on the value of \`load\`, we want to choose either:
1. The new input, OR
2. The output from the previous cycle

Wait... doesn't this sound familiar?

**A logic gate that selects one input out of two based on certain criteria is... a Mux!**

---

## The Solution

Here's how we build our one-bit register:

1. Connect a **Mux** to the input of a **DFF**
2. Connect both the **new input** and the **DFF's output** to the Mux's two input channels
3. Connect the **load bit** to the Mux's selector

**Now:**
- When \`load = 1\`: Mux selects the new input → DFF stores it
- When \`load = 0\`: Mux selects the previous output → DFF continues holding it

Perfect! We've built a one-bit register from first principles.

---

## Implementation Note (Nand to Tetris)

When writing the HDL code for this in Nand to Tetris, you'll hit a constraint: **you can't directly use \`out\` as an input**.

**The workaround:**
1. Save the DFF's output to a temporary variable (e.g., \`temp\`)
2. Connect \`temp\` to the Mux's input interface
3. OR \`temp\` with \`false\` and assign that to the final output

This satisfies the HDL constraints while achieving the same logical behavior.

---

## Summary

To store a single bit from first principles:
- **Mux** lets us choose between new input or previous value
- **DFF** holds the value across clock cycles
- **Clock** gives us a sense of time
- **Load bit** controls when we update vs. hold

By connecting these three components cleverly, we've built computer memory at its most fundamental level.

    `.trim()
  },
  {
    slug: 'machine-language-how-computers-understand-instructions',
    title: 'Machine Language: How Computers Understand Instructions',
    tag: 'Hardware',
    date: 'February 12, 2026',
    content: `
## Why Are Computers So Flexible?

Most machines do a single thing. A toaster toasts. A fan blows air. But a computer? It can browse the web, edit videos, run games, control robots (all on the same hardware).

**So how is this possible?**

---

## The Theory: Universal Turing Machine

The answer lies in **universality**. In the 1930s, Alan Turing proposed the Universal Turing Machine (the theoretical blueprint for all modern computers).

**The key idea:** Any computation can be performed by a machine that simply reads a series of 0s and 1s and follows instructions.

Here's how it works:
1. At any given moment, the machine looks at a single bit (0 or 1)
2. Based on an instruction, it might change that 0 to a 1
3. Then jump to a different state (say, instruction #56)
4. Eventually, it reaches a halt state
5. After halting, the final pattern of 0s and 1s represents the answer

**This is the foundation of all computation.**

---

## The Practice: Von Neumann Architecture

Alan Turing gave us the theory. **John von Neumann made it practical.**

Von Neumann's breakthrough insight: **Memory can store both data AND instructions (the program itself).**

This is called the **Von Neumann Architecture**, and it's what powers every computer you use today.

**The magic:** Hardware stays fixed, but software (instructions and data stored in memory) can change. Change the software, and the computer does something completely different.

---

## How Does Fixed Hardware Perform Different Tasks?

The answer: **We store different instructions in memory.**

Instructions are just sequences of 0s and 1s. When the CPU executes them, it performs different operations based on what's stored.

---

## Elements of an Instruction

Every machine instruction must specify three things:

### 1. The Operation
What should the computer do?
- Example: \`00101\` might mean "add two numbers"
- Other operations: subtract, multiply, AND, OR, jump to a different instruction, etc.

### 2. Program Counter
After executing the current instruction, where do we go next?
- Usually: the next instruction in sequence
- Sometimes: jump to a different location (for loops, if-statements, etc.)

### 3. Addressing
Where do we find the data to operate on?
- Which memory location holds the numbers we want to add?
- This is called **addressing**

---

## The Problem: Machine Language is Inconvenient for Humans

Machine language is the **only** language computers truly understand. But it's horrible for humans to work with.

**Example of raw machine code:**
\`\`\`
0100010 0011 0010
\`\`\`

What does this mean? Who knows?

**Solution:** We write in high-level languages (Python, Java, C++), then **compile** them into machine language.

---

## Mnemonics: Making Machine Code Readable

Instead of writing raw binary, we use **mnemonics** (human-readable symbols for instructions).

**Machine code:**
\`\`\`
0100010 0011 0010
\`\`\`

**Assembly (with mnemonics):**
\`\`\`
ADD R3, R2
\`\`\`

This means: "Add the value in Register 3 to the value in Register 2."

Much easier to understand! The assembler then translates this back to binary for the computer.

---

## Machine Language: The Hardware-Software Interface

Machine language is the **most important interface between hardware and software** because it allows us to specify exactly what we want the hardware to do.

### Variations Between Machine Languages

Different computer architectures have different machine languages. They may differ in:

**1. Richness of operations**
- Some include division as a basic operation
- Others require software to implement division using simpler operations

**2. Data width**
- Some handle 64-bit operations natively
- Others work in 8-bit or 16-bit chunks

**3. Data types**
- Some have native support for floating-point numbers
- Others require software libraries to handle decimals

**Key principle:** Machine language and hardware are in close correspondence. The machine language reflects what the hardware can actually do.

---

## What Every Machine Language Must Specify

Regardless of variations, every machine language must define:

### 1. Operations
What can the CPU do?
- **Arithmetic:** Add, subtract, multiply, divide
- **Logical:** AND, OR, NOT, XOR
- **Flow control:** GOTO, conditional jumps, function calls

### 2. Operands
What data do we operate on?

### 3. Addressing
How do we find the data we want to operate on?

---

## The Addressing Challenge

Addressing creates two major problems:

### Problem 1: Large Memory Requires Large Addresses

If we just want to add two numbers, we might have to specify their full memory addresses:

\`\`\`
ADD [0x7FFFFFFF], [0x7FFFFFFE]
\`\`\`

Those long addresses make instructions bulky and slow.

### Problem 2: Transporting Data Takes Time

Fetching data from far-away memory locations is slow. The farther from the CPU, the longer it takes.

---

## The Solution: Memory Hierarchy

To solve these problems, we use a **memory hierarchy** (arranging memory from fastest to slowest).

**Fastest to Slowest (Closest to CPU to Farthest from CPU):**

1. **Registers** (fastest, smallest, closest to CPU)
2. **Cache** (fast, small)
3. **Main Memory (RAM)** (medium speed, medium size)
4. **Disk** (slowest, largest, farthest from CPU)

**The strategy:**
- Keep frequently-used data in fast, small memory (registers)
- Keep less-used data in slower, larger memory (RAM, disk)
- Fast memory doesn't need large addresses (fewer bits needed)

---

## Registers: The CPU's Closest Memory

Registers are tiny, super-fast memory locations inside the CPU itself. They can be used in two main ways:

### 1. Data Registers
Store actual values for computation.

**Example:**
\`\`\`
ADD R1, R2
\`\`\`
- Take the value in Register 1
- Add it to the value in Register 2
- Store the result in R2 (if that's what our machine language specifies)

### 2. Address Registers
Store memory addresses (pointers).

**Example:**
\`\`\`
ADD R1, @A
\`\`\`
Where \`A\` is an address register:
1. Go to register \`A\`
2. Read the value there (which is a memory address)
3. Go to that address in main memory
4. Add the value found there to R1
5. Store the result at that same memory address

This is called **indirect addressing** (the register holds an address, not the data itself).

---

## Summary

**Machine language is:**
- The only language computers truly understand
- The bridge between hardware and software
- Tedious for humans (so we use assembly and high-level languages)

**Key concepts:**
- **Universality:** Any computation = series of 0s and 1s + instructions
- **Von Neumann Architecture:** Memory stores both data and programs
- **Instructions specify:** Operation + Addressing + Program flow
- **Memory hierarchy:** Solves speed and addressing problems
- **Registers:** Fastest memory, closest to CPU, used for data and addresses
    `.trim()
  },
  {
    slug: 'deep-down-to-bits-how-computers-handle-input-and-output',
    title: 'Deep Down to Bits: How Computers Handle Input and Output',
    tag: 'Hardware',
    date: 'February 23, 2026',
    content: `
Every computer we use has fancy input and output devices (usually called **peripheral devices** because they exist outside the main computer unit).

Your PC has:
- **Inputs:** Keyboard, mouse, camera, microphone
- **Outputs:** Screen, speakers, printers

But have you ever wondered: **How does the computer actually manipulate these devices at the lowest level?** Deep down in the architecture, when everything is just 0s and 1s?

For developers using high-level languages, we have libraries and frameworks that handle this for us. But what if you had to do forensics work and go deep down to just bits?

Let's find out.

---

## The Screen: Not What You Think It Is

To your computer, your monitor is not the fancy graphics you see. **It's just a matrix with rows and columns.**

The intersection of a row and column forms a **pixel** that can be set to 1 or 0.

Think of a monochrome screen with a white background and black text:
- **1** means the pixel is lit (shows black)
- **0** means the pixel is off (shows white/nothing)

**Example:** The Hack computer (from Nand to Tetris) assumes a screen of:
- **256 rows**
- **512 columns**

That's 256 × 512 = **131,072 pixels** total.

---

## What is a Screen Memory Map?

The **screen memory map** is a dedicated chunk of your computer's memory that represents the entire screen.

**Here's how it works:**

The display screen **refreshes many times per second** (typically 60+ times) to show whatever is stored in the screen memory map.

**As a low-level programmer, all you have to do is:**
1. Write values to the screen memory map
2. The screen automatically updates to reflect those values

**No fancy graphics libraries needed.** Just direct memory manipulation.

---

## The Problem: 2D Screen, 1D Memory

Here's the challenge:
- **The screen is two-dimensional** (rows and columns)
- **Memory is one-dimensional** (a linear sequence of addresses)

**How do we map a 2D screen to 1D memory?**

---

## The Solution: Row-Major Mapping

Let's work through the Hack computer example:

### Step 1: Calculate Total Memory Needed

The screen is 256 rows × 512 columns = **131,072 pixels**.

The Hack computer uses **16-bit words** (each word holds 16 bits/pixels).

**How many words do we need?**
\`\`\`
131,072 pixels ÷ 16 bits per word = 8,192 words
\`\`\`

So the screen memory map needs **8,192 words** (or 8K words).

---

### Step 2: Map Rows to Memory

The screen has **512 pixels per row**.

Since each word holds 16 pixels:
\`\`\`
512 pixels per row ÷ 16 pixels per word = 32 words per row
\`\`\`

**The mapping:**
- The **first 32 words** in memory represent the **first row** of the display
- The **next 32 words** represent the **second row**
- And so on...

---

## Finding the Right Memory Address

Now for the practical part: **How do I find the memory address to manipulate a specific pixel at row \`r\` and column \`c\`?**

### Step 1: Find the Row Block

Each row consists of 32 words. To find which block of words represents row \`r\`:

\`\`\`
Row offset = r × 32
\`\`\`

This gives us the starting word address for that row.

---

### Step 2: Find the Word Within the Row

Within each row, there are 32 words, each holding 16 pixels.

To find which word contains column \`c\`:

\`\`\`
Word offset = c ÷ 16  (integer division)
\`\`\`

**Why integer division?**
- Columns 0-15 are in word 0
- Columns 16-31 are in word 1
- Columns 32-47 are in word 2
- And so on...

---

### Step 3: Add the Screen Memory Base Address

The screen memory map doesn't start at address 0. It has an offset.

For the Hack computer, the screen memory map starts at address **16384**.

**Final formula:**
\`\`\`
Address = 16384 + (r × 32) + (c ÷ 16)
\`\`\`

---

## Example: Writing to Pixel at Row 10, Column 50

Let's say we want to turn on the pixel at row 10, column 50:

\`\`\`
Address = 16384 + (10 × 32) + (50 ÷ 16)
        = 16384 + 320 + 3
        = 16707
\`\`\`

So we write to memory address **16707** to manipulate that pixel.

**But wait!** Column 50 ÷ 16 = 3 with a remainder of 2. That means:
- We write to word at address 16707
- We need to set bit #2 within that word (since 50 = 16×3 + 2)

---

## The Keyboard: Input Through Memory

Just like the screen, the keyboard also uses a **memory map**.

### How It Works

There's a dedicated memory location called the **keyboard memory map**. This single word represents the key currently being pressed.

**Standard key codes:**
- Each key has a standard bit value (ASCII or EBCDIC)
- Example: \`K\` = 75, \`Space\` = 32

**When you press a key:**
1. Your keyboard cable (or wireless signal) transfers the key's code
2. The code is converted to binary
3. The binary value is written to the keyboard memory map
4. Your program reads that memory location to see which key was pressed

**When no key is pressed:**
The keyboard memory map holds 0.

---

## Why This Matters

Understanding memory maps teaches you:

1. **How operating systems work** (they manage these memory maps)
2. **How device drivers work** (they translate high-level commands to memory writes)
3. **How graphics rendering works** (drawing is just writing patterns to screen memory)
4. **How embedded systems work** (IoT devices use memory-mapped I/O extensively)

**This is the foundation of all computer I/O.** Everything else is just abstraction built on top of this simple concept.

---

## Summary

**Key concepts:**
- **Screen memory map:** A chunk of memory that represents every pixel on the screen
- **2D to 1D mapping:** Rows are laid out sequentially in memory (row-major order)
- **Address calculation:** \`Base + (row × words_per_row) + (column ÷ bits_per_word)\`
- **Keyboard memory map:** A single memory location holding the code of the currently pressed key
- **Memory-mapped I/O:** All peripheral devices are controlled by reading/writing memory

**Next time:** We'll write actual Hack assembly code to draw shapes on the screen using these memory maps.
    `.trim()
  }
]

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug)
}

export function getAllBlogs() {
  return blogs
}
