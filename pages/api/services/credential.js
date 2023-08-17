import fs from 'fs'
import path from 'path'
import { compare, hash } from 'bcrypt'

const credentialPath=path.join(process.cwd(),"pages","data","accountData.json")


export const allData=()=>{
   const data= fs.readFileSync(credentialPath)
   return JSON.parse(data)
}
export const checkData=(email)=>{
    const fullData=allData()
  return  fullData.find((elem)=>{
return elem.email===email
    })
 }
 export  const checkDataPassword=async(hashedPassword,password)=>{
    const isValid= await compare(password,hashedPassword)
  return isValid
}

 export const saveData=async(email,password)=>{
    const hashedPassword= await hash(password,10)
const fulldata=allData()
fulldata.push({email,password:hashedPassword})
fs.writeFileSync(credentialPath,JSON.stringify(fulldata))
 }
 

