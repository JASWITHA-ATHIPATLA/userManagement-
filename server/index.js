import express from 'express';
import mongoose from 'mongoose';
import users from './models/Users.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/users')

app.get('/',(req,res)=>{
   users.find({})
   .then(user=>res.json(user))
   .catch(err=>res.json({error:err.message}))
})
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;

    users.findById(id)
    .then(user => {
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/updateUser/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await users.findByIdAndUpdate(
      id,
      req.body,
      { new: true }  // returns updated document
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await users.findByIdAndDelete(
      id,
      req.body,
      { new: true }  // returns updated document
    );

    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.post('/createUsers',async(req,res)=>{
   users.create(req.body)
   .then(user=>res.json(user))
   .catch(err=>res.json({error:err.message}))
});

app.listen(3000,()=>{
 console.log('server is running on port 3000');
})
