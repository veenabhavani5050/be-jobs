// mongodb connection
const mongoose =require ('mongoose')
const app =require('./app')
const {MONGODB_URI} =require('./utils/config')

// mongodb connection
mongoose.connect(MONGODB_URI)
.then(()=>{
console.log("The mongobd connected Successfully");
// server connection
app.listen(3001,'127.0.0.1',()=>{
    console.log('Server is running at http://127.0.0.1:3001');
})
}).catch((err)=>{
console.log(`mongodb not connected ${err}`);

})