
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const Schema = mongoose.Schema;

const SampleSchema = new Schema({
 
    hospitalName: {
    type: String
  },
  itemType: {
    type: String
  },
  quantityAsked: {
    type: String,
    default: "",
    required: true,
  },
  address: {
    type: String,
  }
  


});

const Reqeuest = mongoose.model("Requests", SampleSchema);

const app=express()
    
app.use(cors())
mongoose.connect("mongodb+srv://newuser:Shellhacks2020@cluster0.e2pi8.gcp.mongodb.net/CommunitySupplierDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS:2000
});

app.use(express.json()); // Make sure it comes back as json


app.get('/', async (req, res) => {
    
    try {
      const requests = await Reqeuest.find();
      res.json({results:requests});
    } catch (error) {
      console.log(error);
    }
  });

app.post('/',(req,res)=>{

    const { hospitalName,
    itemType,
    quantityAsked,
    address,
   }= req.body

   const data={hospitalName,itemType,quantityAsked,address}
   const request=new Reqeuest(data)
   request.save((err, dbData) => {
    // If error occured, return error respons
    if (err) {
      if (err.name != "ValidationError") {
        res.status(502).send({message:err.name});
      } else {
         res.status(400).send({});
      }
    }
  
   
    // Return success response
    res.redirect("/")
  });
  



})  
  
  // Listen to the App Engine-specified port, or 8080 otherwise
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });


    
    
    
    