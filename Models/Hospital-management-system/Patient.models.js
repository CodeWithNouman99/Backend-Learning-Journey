import mongoose from "mongoose"

const patient_Schema=mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    diagnosis:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        required:age
    },
    bloodGroup:
    {
        type:String,
        required:true,
        enum:["AB+","AB-","O-"],
        default:"AB+"
    },
    gender:
    {
        type:String,
        enum:["Male","Female"],
        default:"Male",
        required:true
    },
    admitted:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }

},{timestamps:true})

export const Patient=mongoose.model("Patient",patient_Schema)