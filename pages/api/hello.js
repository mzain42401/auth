import { checkData, saveData } from "./services/credential"


export default function handler(req, res) {
  const {email,password}=req.body

  if (req.method==="POST") {
    const check=checkData(email)
    if (check===undefined) {
      saveData(email,password)

      return res.status(200).send()
    }
    else{
   res.status(409).json({ error: 'User already exists' })

    }
   
  }



  // res.status(200).json({ name: 'John Doe' })
}
