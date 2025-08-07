const { registerController, loginController, profileController, logoutController, usersController } = require("../controller/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

const router = require("express").Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/logout',logoutController)
router.get('/profile',authMiddleware,profileController)
router.get('/users',authMiddleware,usersController)

module.exports = router
