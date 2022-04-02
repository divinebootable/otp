
const creditAcount = (req, res) => {
  const { balance, users, created_on } = req.body;
  console.log(req.body);
  db("accounts")
    .insert({ balance, users, created_on })
    .returning("*")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json({ Error: "bad request" }));
};


const getAccountId = (req, res) => {
  const { users } = req.params;
  db("accounts")
    .join("users", "accounts.users", "=", "users.users_id")
    .select(
      "accounts.account_id",
      "eaccounts.balance",
      "users.email",
      "accounts.created_on"
    )
    .where("accounts.users", users)
    .where("expenses.is_delete", false)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json({ Error: "bad request" }));
};

const getAllAccount = (req, res) => {
  db("accounts")
    .join("users", "accounts.users", "=", "users.users_id")
    .select(
      "accounts.account_id",
      "eaccounts.balance",
      "users.email",
      "accounts.created_on"
    )
    .where("accounts.users", users)
    .where("expenses.is_delete", false)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json({ Error: "bad request" }));
};


module.exports = {
  creditAcount,
  getAccountId,
  getAllAccount,
};