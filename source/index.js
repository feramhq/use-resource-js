class Disposable {

  constructor () { }

  dispose () { }
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
    if (!resource.disposeFunction) {
      throw new Error('Parameter resource must be of type Resource')
    }
    return await closure(resource.resourceObject)
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
