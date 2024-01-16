import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

function App() {
  async function test(){
    await addDoc(collection(db, "user"),{
      firstname:"Adit",
      lastname:"Karode",
      email:"adit.karode@gmail.com"
    });
  }
  return (
    <div className="App">
      <h1>snap-calorie</h1>
      <ImageUpload />
      <button onClick={()=>{
        test();
      }}> Query Test </button>

    </div>
  );
}

export default App;

