const express = require("express")
const router = express.Router()



router.get("/", (req, res) => {
    res.send("Routine List")
});


router.post("/", (req, res) => {
    const body = req.body;

    res.status(201).json({
        ok: true,
        message: "Created successfully",
        payload: {
            body,
        },
    });
});


router.get("/:id", (req, res) => {
    res.send("Routine new form")
});


router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body

    res.status(201).json({
        ok: true,
        message: `Routine ${id} updated successfully`,
        payload: {
            name,
        },
    });
});


router.delete("/:id", (req, res) => {
    const { id } = req.params;

    res.status(202).json({
        ok: true,
        message: `Routine ${id} deleted successfully`,
    });
});



module.exports = router;