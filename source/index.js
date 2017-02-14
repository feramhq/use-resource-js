class Disposable {

  constructor () { }

  async dispose () { }
}

class Resource extends Disposable {

  constructor (resourceObject, disposeFunction) {
    super()

    this.resourceObject = resourceObject

    if (!disposeFunction) throw new Error('disposeFunction is not set')
    this.disposeFunction = disposeFunction
  }

  async dispose () {
    if (this.disposeFunction) await this. disposeFunction(this.resourceObject)
    this.disposeFunction = null
  }
}

async function using (resource, closure) {
  try {
    if (!closure) throw new Error('Parameter closure is not set')
    if (!resource.dispose) {
      throw new Error('Parameter resource must implement `async dispose () `')
    }
    return await closure(resource)
  }
  finally {
    try {
      // console.dir(resource.resourceObject)
      await resource.dispose()
    }
    catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  Disposable,
  Resource,
  using,
}
