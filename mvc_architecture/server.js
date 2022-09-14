const express = require ('express');
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use(productRouter);




app.use((req,res,next)=>{
    res.status(404).json({
        message:"Resource Not Found",
    });
});


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});