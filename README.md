# Resource Management with 'using'

This package allows you to use [C# like syntax] for resource management.

[C# like syntax]:https://msdn.microsoft.com/en-us/library/yh598w02.aspx

```es2016
const {Resource, using} = require('use-resource')

console.log('Creating resource')
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


## Custom disposable classes

```es2016
const {Disposable, using} = require('use-resource')

class MySshTunnel extends Disposable {

  async dispose () {
    console.log('Closing ssh tunnel')
  }

}

using(new MySshTunnel(), async tunnel => {
  console.log('Doing stuff using the ssh tunnel')
}
```
