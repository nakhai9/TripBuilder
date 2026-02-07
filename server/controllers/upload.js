const Utils = require("../utils/uploadUtils");

const uploadFiles = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const result = await Utils.file.handleUploadToCloudinary(req.file, {
            public_id: req.file.originalname,
        });
        return res.status(200).json({ message: "File uploaded successfully", data: result });
    } catch (error) {
        return res.status(500).json({ message: "Error uploading file", error: error.message });
    }
}

module.exports = {
    uploadFiles,
};