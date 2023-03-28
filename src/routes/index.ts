import {Router} from "express"
import {readdirSync} from "fs"
const router = Router();

const cleanfileName = (filename:string) => filename.split('.').shift();

const PATH_ROUTER = `${__dirname}`
readdirSync(PATH_ROUTER).filter((filename)=> {
   const cleanname = cleanfileName(filename);
   if (cleanname !== 'index') {
        import(`./${cleanname}`).then((moduleRouter) =>{
           // console.log('se esta cargando la ruta  ......./ '+ cleanname);
            router.use(`./${cleanname}`,moduleRouter.router)
        })
    }
})
export {router};
