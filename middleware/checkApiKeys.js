export default function checkApiKeys (req, res, next) {
    const apiKey = req.get("x-api-key");

    if(apiKey !== "college-demo") {
        return res.status(403).json({ message: "Acces denied" });
    };
    next();
};