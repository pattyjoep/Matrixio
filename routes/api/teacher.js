const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");
const passport = require("../../passport/")

//Matches with "/api/teacher"
router
  .route("/")
  .get(teacherController.findAll)
 // .post(teacherController.create)
  .delete(teacherController.delete);

  router.get("/current", (req, res) => {
    res.json(req.user);
  });
/*
//Matches with /api/teacher/login
//Login require a post instead of a get because it get will not accept req.body.
router.route("/login").post(teacherController.findByEmail);
*/
router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", function (err, user) {
    if (err) {
      
      return res.status(500).json({
        message: err || "Signup failed.",
      });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err || "Login failed.",
        });
      }
      user.isAuthenticated = true;
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/signin", function (req, res, next) {
  console.log("logging in");
  next();
},
  passport.authenticate("local-signin"),
  (req, res) => {
    console.log("logged in", req.user);
    let userInfo = req.user;
    res.send(userInfo);
  }
);

router.get("/signout", (req, res) => {
  req.logout();
  req.session = null;
  //test this before finalizing.... should redirect to the below page.
  res.redirect("http://localhost:3000");
});

/*
// Matches with /api/teacher/signup
router
  .route("/signup")
  .get(teacherController.findByEmail)
  .post(teacherController.create);
*/

//Matches with "/api/teacher/:id"
router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update);

module.exports = router;
