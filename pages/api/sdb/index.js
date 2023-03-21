import nextConnect from "next-connect";
import ErrorHendler from "@/src/handlers/error.handler";
import SdbController from "@/src/controllers/sdb.controller";
import { isNumber } from 'lodash';

const handler = nextConnect(ErrorHendler)

handler.post(async(req,res) => {
    try{
        console.log("data : "+ req.body)
        let sdbDTO = req.body

        const [err,data] = await new SdbController({
            fields: sdbDTO
        }).create()

        if(err){
            let messageError = err?.message ?? "Error Saving Data"
            return res.status(300).json({
                rc: "99",
                desc: messageError
            })
        }

        return res.status(200).json({
            rc: "00",
            desc: "Success Saving Data.",
            data: sdbDTO
        })
    } catch (err){
        return res.status(500).json({
            rc: "99",
            rd: "General Error",
            message: err?.message ?? "Exceptions Error"
        })
    }
    
})

.get( async (req, res)=>{
    const [err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((result) => {
        return [null, result]
    }).catch((err) => {
        return [err, null]
    })

    if(err){
        return res.status(400).json({
            rc: '01',
            rd: 'not resp'
        })
    }
    return res.status(200).json(
        data
        // rc: '00',
        // data:data
    )
})

.delete(async(req, res) => {
    try{
        const sdbDTO = req.body
        const [err, data] = await new SdbController({
            key: sdbDTO?.key ?? "id",
            value: isNumber(sdbDTO?.value) ?
            Number(sdbDTO?.value) :
            sdbDTO?.value ?? null
        }).delete()

        if(err){
            return res.status(400).json({
                error: true,
                message: err?.message ?? "Bad Request"
            })
        }

        return res.status(200).json({
            rc: '00',
            rd: 'Success Delete Data'
        })
    } catch (err){
        return res.status(500).json({
            rc: "99",
            rd: "General Error",
            message: err?.message ?? "Exceptions Error"
        })
    }
})


export default handler