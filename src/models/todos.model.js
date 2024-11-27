import mongoose from "mongoose"


const Schema = mongoose.Schema

const todoSchema = new Schema(
    {
        title : {
            type : String,
            require:true
        },
        description :{
            type: String,
            require:true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Todos",todoSchema)