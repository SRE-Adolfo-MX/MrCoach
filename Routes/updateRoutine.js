const express = require("express");
const router = express.Router()
const routines = require("../usescases/routines");


  router.patch("/:id", async (req, res, next) => {
    const { id } = req.params;

      try {
        const routineUpdated = await routines.updateByStatus(id);
        
        if (!routineUpdated) {
            res.status(500).json({
                ok: false,
                message: "Routine don't exist",
              });
        }
        res.status(201).json({
          ok: true,
          message: "Routine disable",
          payload: {
            product: routineUpdated,
          },
        });
      } catch (error) {
        next(error);
      }
  });


module.exports = router;