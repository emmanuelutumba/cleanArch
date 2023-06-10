const UserService = require("../service/userService");
const userService = new UserService();

function routes(express) {
    const router = express.Router();
    router.post("/users", (req, res) => {
        try {
            userService.create(req.body);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    return router;
}
module.exports = routes;