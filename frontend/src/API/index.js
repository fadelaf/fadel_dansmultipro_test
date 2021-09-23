import axios from "axios";
const URL = "http://localhost:3000";

const register = async (data) => {
  const regdata = await axios({
    method: "POST",
    url: `${URL}/api/register`,
    data: data,
  })
    .then((account) => {
      return account.data;
    })
    .catch((err) => {
      return err.msg;
    });

  return regdata;
};

const login = async (data) => {
  const logindata = await axios({
    method: "POST",
    url: `${URL}/api/login`,
    data: data,
  })
    .then((account) => {
      //   console.log(account);
      return account.data;
    })
    .catch((err) => {
      return err;
    });

  return logindata;
};

const jobs = async (page) => {
  const jobs = await axios({
    method: "GET",
    url: `${URL}/api/jobs/${page}`,
  })
    .then((res) => {
      //   console.log(account);
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return jobs;
};

const jobsDetail = async (id) => {
  const jobs = await axios({
    method: "GET",
    url: `${URL}/api/job-detail/${id}`,
  })
    .then((res) => {
      //   console.log(account);
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return jobs;
};
export { register, login, jobs, jobsDetail };
