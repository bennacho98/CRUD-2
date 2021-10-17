import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ImagenDescription = new Schema(
    {
        Género: {
            type: String,
            require: true
        },
        color_cabello:{
            type: String,
            require: true
        },
        color_piel:{
            type: String,
            require: true
        },
        ojos:{
            type: String,
            require: true
        },
        color_ojos:{
            type: String,
            require: true
        },
        nariz: {
            type: String,
            require: true
        },
        labios:{
            type:String,
            require: true
        },
        usuarioId: String,
        date: {
            type: Date,
            default: Date.now
        }
    }
)

const Persona = mongoose.model('Persona', ImagenDescription)

export default Persona