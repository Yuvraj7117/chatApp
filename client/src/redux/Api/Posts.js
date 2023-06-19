import React from 'react'
import { useGetLimitedPostsQuery,useDeletePostByIdMutation, useCreatePostsMutation,useUpdatePostByIdMutation } from './api'

const Posts = () => {
     
    //getData response
    const response = useGetLimitedPostsQuery(4)
    const {data,isLoading,isError} = response



    //deletion response
    const [delFun,delObj]= useDeletePostByIdMutation();


//  console.log(delObj)

 //createPost

 const [postFun,postObj]=useCreatePostsMutation();


 
 console.log(postObj)
 const newPost = {
    title:"this is my new title ",
    userId:1,
    body:"hello My Name is Nirajan Biswas"  
 }
  

  //update

const[putFun,putObj]=useUpdatePostByIdMutation()

console.log(putObj)
  const updateData={
    id:3,
    title:"new title ",
    userId:1,
    body:"hello My Name is yuvraj Biswas"
    
 }


    

  return (
    <>
  {/* getData */}
       {isLoading === true ? (
        <h1>Loading.....</h1>
      ) : isError === true ? (
        <h1>An Error Occured</h1>
      ) :  
      data.map((item, index) => 
        <div key={index}>
          <h1>{item.id}</h1>
        </div>
      )
    
      }


    {/* deleteData */}
      <button onClick={()=>{delFun(10)}}>Delete Post</button>
      {
        delObj.isSuccess && <h1>{`Deleted Successfully Id ${delObj.originalArgs}`}</h1>
      }


      {/* CreateData */}

      <button onClick={()=>{postFun(newPost)}}>Create Post</button>
      {
        postObj.isSuccess && <h1>{`Created Successfully Id ${postObj.originalArgs.userId}`}</h1>
      }


    {/* UpdateData */}

    <button onClick={()=>{putFun(updateData)}}>Update Post</button>
      {
        putObj.isSuccess && <h1>{`updated Successfully Id ${putObj.originalArgs.userId}`}</h1>
      }
      
    </>
  );
}

export default Posts