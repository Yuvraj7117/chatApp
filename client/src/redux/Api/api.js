import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getApi = createApi({
    reducerPath:"Posts",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query:()=>({
                url:"posts",
                method:"GET"
            })
      }),
      getPostById:builder.query({
        query:(id)=>({
            url:`posts/${id}`,
            method:"GET"
        })
      }),
      getLimitedPosts:builder.query({
        query:(num)=>({
            url:`posts/?_limit=${num}`,
            method:"GET"
        })
      }),
      deletePostById:builder.mutation({
        query:(id)=>({
             url:`posts/${id}`,
             method:"DELETE"
        })
      }), 
       createPosts:builder.mutation({
        query:(newPost)=>{
            
            return{
            url:`posts`,
            method:"POST",
            body: newPost,
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
      }}
      }),
      updatePostById:(builder.mutation({
        query:(updatePost)=>{
            const{id,...data}=updatePost
            return{
            url:`posts/${id}`,
            method:"PUT",
            body:data,
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }}
      }))
    
    } ) 
})



export const {useGetAllPostsQuery,useGetLimitedPostsQuery,
    useGetPostByIdQuery, useDeletePostByIdMutation,
     useCreatePostsMutation,useUpdatePostByIdMutation} = getApi