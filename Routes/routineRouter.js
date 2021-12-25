const express = require("express");
const router = express.Router()
const routines = require("../usescases/routines");

router.get("/", async (req, res, next) => {
    try {
        const allRoutines = await routines.get()
        res.json({
            ok: true,
            message: "Done!",
            payload: { allRoutines },
        });
    } catch (err) {
        next(err)
    };
});

router.post ("/", 
async (request, response, next)=> {
  try { 
    const routineData= request.body; 
    const routineCreated= await routines.create(routineData);

    response.status(201).json({ 
      ok:true,
      message: "New routine created", 
      payload: routineCreated,
      
    });
  }catch (error){
    next(error);
  }
}); 


router.get(
    "/:id",
    async (req, res, next) => {
      try {
        const { id } = req.params;
  
        const payload = await routines.getById(id);
  
        res.status(200).json({
          ok: true,
          message: "Done!",
          payload,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch("/:id", 
  async (request, response, next)=> {
    try {
      const {id}= request.params;
      const routineData= request.body;
      const routineUpdate= await routines.update(id, routineData); 
      response.status(201).json({
        ok:true,
        message: "Routine updated successfully",
        payload:{
          user: routineUpdate,
        }
      })
    }catch (error){
      next (error);
    }
  });


  router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

      try {
        const routineDeleted = await routines.deleteByStatus(id);
        
        res.status(201).json({
          ok: true,
          message: "Routine Deleted",
          payload: {
            product: routineDeleted,
          },
        });
      } catch (error) {
        next(error);
      }
  });


module.exports = router;