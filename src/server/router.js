import express from 'express'
import {compiler} from './app'
import path from 'path'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const filename = path.join(__dirname,'public/javascripts/index.html');
  console.log(filename);
  compiler.outputFileSystem.readFile(
    filename, (err, result) => {
      if(err){
        return (next(err))
      }
      res.setHeader('content-type', 'text/html')
      res.send(result)
    })
});

// https://qiita.com/rooooomania/items/4c999d93ae745e9d8657 CommonJsとES6のimport/export
export default router
