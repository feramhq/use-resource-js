# Resource Management with 'using'

This package allows you to use [C# like syntax] for resource management.

[C# like syntax]:https://msdn.microsoft.com/en-us/library/yh598w02.aspx

```es2016
console.log('Creating resrouce')
const r = new Resource({}, async () => console.log('Disposing resource'))
console.log('Using resource')
using(r, async r => {
  const timeout = new Promise(resolve => setTimeout(() => resolve(), 1000))
  await timeout
  console.log('Working with resource')
})
```

## Installation

`npm install use-resource`
