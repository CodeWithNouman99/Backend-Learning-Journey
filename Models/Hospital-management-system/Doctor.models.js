import mongoose from "mongoose"


const doctor_Schema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        salary:
        {
            type: String,
            required: true
        },
        qualification:
        {
            type: String,
            required: true
        },
        experience:
        {
            type: Number,
            default: 0
        }
    }, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctor_Schema)