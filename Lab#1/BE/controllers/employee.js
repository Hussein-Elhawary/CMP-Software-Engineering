const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  id = req.params.id;
  employee.splice(employee.findIndex((x) => x.id === id), 1);
  res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  id1 = req.body.id;
  employee.push({ id:id1, name: req.body.name });
  res.status(201).json({ data: employee });
};
