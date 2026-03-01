const Response = require("../utils/handleError");
const ProvinceSchema = require("./../models/province")

const get = async (req, res) => {
    try {
        const { type } = req.query;

        let options = {};
        
        if(type === 'new') {
            options = {
                isMerged: false
            }
        }

        const locations = await ProvinceSchema.find(options).lean();

        res.status(201).json(Response({
            code: "success",
            data: sortByCodeNameAsc([...locations.map(x => ({ id: x._id, codeName: x.codeName, name: x.name, mergedInto: x.mergedInto, isMerged: x.isMerged }))]),
            message: ""
        }));
    } catch (error) {
        res.status(500).json({ message: "Lỗi hệ thống", error: error.message });
    }
}

function sortByCodeNameAsc(arr) {
    return [...arr].sort((a, b) =>
        a.codeName.localeCompare(b.codeName)
    );
}

module.exports = { get }