import express, { Request, Response } from 'express'


const app=express();
const port = process.env.PORT || 3001;



if(process.env.MONGO_URL){
throw new Error("add Your mongo url");

}

app.get('/', (req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

app.listen(port,()=>  console.log(`Server : ${port}`))
