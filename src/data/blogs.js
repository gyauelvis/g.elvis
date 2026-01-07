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
  }
]

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug)
}

export function getAllBlogs() {
  return blogs
}
