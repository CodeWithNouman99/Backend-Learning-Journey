import mongoose from "mongoose"

const hospital_Schema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        addressline1:
        {
            type: String,
            required: true
        },
        addressline2:
        {
            type: String,
            required: true
        },
        city:
        {
            type:String,
            required:true
        }
    }, { timestamps: true })
export const Hospital = mongoose.model("Hospital", hospital_Schema)