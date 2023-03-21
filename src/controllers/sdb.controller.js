import { PrismaClient } from "@prisma/client";

export default class SdbController{
    
    constructor(props){
        this.prisma = new PrismaClient();
        this.fields = props?.fields ?? null
        this.value = props?.value ?? null
        this.key = props?.key ?? undefined
    }

    async create(){
        try{
            if(!this.fields) return [ new Error('Field is required'), null]
            const result = await this.prisma.sdb.create({
                data: this.fields
            })
            return [null, result]
        } catch (err){
            return [err, null]
        }
    }

    async delete(){
        try{
            if(!this.key) return [ new Error('Key is required'), null]
            const result = await this.prisma.sdb.delete({
                where: {
                    [ this.key ]: this.value
                }
            })

            return [ null, result ]
        } catch (err){
            return [err, null]
        }
    }
}