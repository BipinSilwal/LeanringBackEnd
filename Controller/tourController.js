const Tour = require('../Models/TourModel');


exports.postTour = async(req,res)=>{

    try{
        

        const newTour = await Tour.create(req.body);
      
        res.status(200).json(newTour);

    } 

    catch(err){

        res.status(400).json(err);

    }



        



}


exports.getAllTour = async(req,res)=>{

    try{ 
        
        const ObjQuery = {...res.query};
        const excludedFields = ['page', 'sort','limit', 'Fields'];
        excludedFields.forEach(el=> delete ObjQuery[el])

        const getAllTour = Tour.find(ObjQuery);

        res.status(200).json({status:'success', result: getAllTour.length, getAllTour});

    }

    catch(err){

        res.status(400).json(err);

    }



        



}

exports.singleTour = async(req,res)=>{

    try{
 
        const singleTour = await Tour.findById(req.params.id);
      
        res.status(200).json(singleTour);

    }

    catch(err){

        res.status(400).json(err);

    }



        



}

exports.updateTour = async(req,res)=>{

    try{
 
        const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body,{ new:true , runValidators:true } );
        console.log(updateTour);
      
        res.status(200).json(updateTour);

    }

    catch(err){

        res.status(400).json(err);

    }



        



}


exports.deleteTour = async (req,res)=>{

    try{

        await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json('file deleted!!');


    }
    catch(err){
            res.status(400).json(`something was wrong ` , err);

    }

               



}

