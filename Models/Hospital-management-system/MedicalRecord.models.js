import mongoose from "mongoose";

const medical_Record_Schema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },

        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },

        diagnosis: {
            type: String,
            required: true,
            trim: true,
        },

        symptoms: [
            {
                type: String,
                trim: true,
            },
        ],

        medications: [
            {
                medicineName: {
                    type: String,
                    required: true,
                },
                dosage: {
                    type: String,
                    required: true,
                },
                frequency: {
                    type: String,
                    required: true,
                },
            },
        ],

        allergies: [
            {
                type: String,
                trim: true,
            },
        ],

        notes: {
            type: String,
            trim: true,
        },

        visitDate: {
            type: Date,
            default: Date.now,
        },

        nextAppointment: {
            type: Date,
        },

        reports: [
            {
                type: String, // Report file URL
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Medical_Record = mongoose.model(
    "Medical_Record",
    medical_Record_Schema
);