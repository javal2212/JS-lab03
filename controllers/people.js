const arr = [{
    UniqueId: 2212,
    name: 'Jamie Stratton',
    Age: 39,
    position: 'Team lead'
},
{
    UniqueId: 2213,
    name: 'Chike Udobi',
    Age: 32,
    position: 'Manager'
},
{
    UniqueId: 2214,
    name: 'Javal Patel',
    Age: 24,
    position: 'Technical specialist'
},
{
    UniqueId: 2215,
    name: 'Logan paul',
    Age: '22',
    position: 'Jr. Technical specialist'
}];

exports.index = (_, res) => {
    res.status(200).json(arr);
};

exports.show = (req,res,next) => {

    const id = req.params.id;
    const a = arr.UniqueId[Id];
    
};