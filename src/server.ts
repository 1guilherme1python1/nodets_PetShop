import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//configurações das variaveis de ambientes
dotenv.config();
//inicializaçãod o servidor
const server = express();
//setando as configuraçõs do template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());
//caminho para arquivos staticos (css, imgs etc...)
server.use(express.static(path.join(__dirname, '../public')))

//configuração de rotas
server.use(mainRoutes);


server.use((req:Request, res:Response)=>{
    res.render('pages/404');
})
//escutador de porta
server.listen(80)