const { render } = require('@testing-library/react');
const {myblog} = require('../models/Blog');
  express = require("express"),
  router = express.Router();
  
  
// CREATE blog
router.post("/create-blog", (req, res, next) => {
  var list=[];
    let maxID;
    // tìm id max trong mảng để tạo id cho bài viết mới
    if(myblog?.length==0){
        maxID=0;
    }else{
        maxID=myblog[0].id;
        for(let i of myblog){
            if(i.id>maxID){
                maxID=i.id;
            }
        }
        maxID=maxID+1;
    }
    
    const item={id: maxID, content: req.body.content, comment: list };
    myblog.push(item);
    res.status(200).json(req.body.content);
});
 
router.post("/comment/:id", (req, res, next) => {
  const ID= Number(req.params.id); // lấy id của bài viết
    const comment= req.body.comment+" ";
    console.log(comment);
    var list=[];
    list.push(comment);
    for( let i of myblog){
        if(i.id==ID){
            i.comment.push(comment); // thêm comment vào danh sách comment của bài viết
        }
    }
    console.log(myblog);
    res.status(200).json(req.body.comment);
    
});

// READ blog
router.get("/", (req, res) => {
  
 // res.json(myblog);
  res.json(myblog);
});

router.get("/detail-blog/:id", (req, res) => {
  const ID= Number(req.params.id);
  
    for(let i of myblog){
        if(i.id==ID){
            res.json(i);
            console.log(ID);
        }
    }
});
  
// UPDATE blog
router
  .route("/update-blog/:id")
  // Get Single blog
  .get((req, res) => {
    const ID= Number(req.params.id);
    for(let i of myblog){
        if(i.id==ID){
            res.json(i.content);
        }
    }
    
  })
  
  // Update blog Data
  .put((req, res, next) => {
    let ID=Number(req.params.id);
    for(let i of myblog){
        if(i.id==ID){
            i.content=req.body.content;
            res.json(req.body.content); // lưu content đã được edit
        }
    }
  });
  
// Delete Blog
router.delete("/delete-blog/:id", 
(req, res, next) => {
  let ID=Number(req.params.id);
  console.log(myblog, ID);
    for( var i=0;i<myblog?.length;i++){
        if(myblog[i].id==ID){
            myblog.splice(i,1);
            res.json(myblog);
            console.log(myblog);
        }
    }

    
});
  
module.exports = router;