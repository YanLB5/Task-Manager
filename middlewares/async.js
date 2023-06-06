const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper

//example of operation without asyncWrapper:

// const createTask = async (req, res) => {
//     try {
//       const task = await Task.create(req.body)
//       res.status(201).json({ task })
//     } catch (error) {
//       res.status(500).json({ msg: error })
//     }
//   }

  