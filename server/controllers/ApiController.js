const { default: axios } = require("axios");
const { User } = require("../models");
class ApiController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      //   console.log(password);

      const findUser = await User.findOne({ where: { username: username } });

      if (findUser) {
        res.status(409).json({
          msg: "username already exist",
        });
      } else {
        await User.create({
          username,
          password,
        });
      }

      res.status(200).json({
        status: 200,
        msg: "Register Success",
      });
    } catch (err) {
      res.status(500).json({ status: 500 });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      //   console.log(username);
      const user = await User.findOne({ where: { username: username } });
      //   console.log(user);
      if (user) {
        if (password === user.password) {
          res.status(200).json({
            status: 200,
            message: "Login Success",
          });
        } else {
          throw {
            status: 403,
            message: "Invalid Password",
          };
        }
      } else {
        throw {
          status: 404,
          message: "User not found",
        };
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getData(req, res) {
    try {
      const page = req.params.page;
      if (!page) page = 1;

      const api = await axios
        .get(
          "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=" +
            page
        )
        .then((item) => {
          return item.data;
        });

      res.json(api);
    } catch (err) {
      res.json({
        status: 500,
      });
    }
  }

  static async getDetailJob(req, res) {
    try {
      const id = req.params.id;
      //   console.log(id);
      const api = await axios
        .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
        .then((item) => {
          return item.data;
        });
      res.json(api);
    } catch (err) {
      res.json({
        status: 500,
      });
    }
  }

  static async searchJob(req, res) {
    try {
      const desc = req.query.description;
      const loc = req.query.location;
      const job_time_status = req.query.fulltime;

      const apiURL =
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?";

      if (desc !== "") {
        apiURL + "description" + desc;
        // console.log(apiURL);

        if (loc) {
          apiURL + "&" + `location=${loc}`;
          if (job_time_status) {
            apiURL + "&" + `full_time=${job_time_status}`;
          }
        }
      }
      if (!desc & loc) {
        apiURL + `location=${loc}`;
        if (job_time_status) {
          apiURL + "&" + `full_time=${job_time_status}`;
        }
      }
      if (!desc & !loc & job_time_status) {
        apiURL + `full_time=${job_time_status}`;
      }

      //   console.log(loc);
      //   if (desc) {
      //     apiURL + "description";
      //   }
      //   console.log(apiURL);
      const api = await axios.get(apiURL).then((item) => {
        return item.data;
      });

      res.json(api);
    } catch (err) {
      res.json(err);
    }
  }
}

// console.log(ApiController.getData());
module.exports = ApiController;
