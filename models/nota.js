import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    descripcion: {type: String, required: [true, 'color de cabello', 'color de piel', 'forma de ojos', 'color de ojos', 'nariz', 'labios']},
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});


//Convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;
