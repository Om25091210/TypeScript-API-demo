/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

interface UserData {
    id: string;
    email: string;
    name: string;
    password: string;
    phoneNo: number;
    createdAt: string;
    updatedAt: string;
  }

//get users data.
const getUsers = async (req:Request, res:Response, next:NextFunction) =>{
    const config={
        headers:{
            route_auth:'LqA[3br%H{Am1r2aFmXx_=Z1r1'
        }
    }
    //call the api to get data.
    let result:AxiosResponse =await axios.get('http://apis-demo-om25091210.vercel.app/users/all',config);
    // will save the data and show again.
    let users:UserData = result.data;
    //send the response and return.
    return res.status(200).json({
        Users: users
    });
};

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

//updating a post
const updatePost = async (req:Request, res: Response, next:NextFunction) =>{
    let id: string  = req.params.id;
    //get the data from req.body
    let title:string = req.body.title ?? null;
    let body:string = req.body.body ?? null;
    //update the post
    let response : AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        text: title,
        body: body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

const deletePost = async (req: Request, res:Response, next:NextFunction) =>{
    //get the post id
    let id: string = req.params.id;
    //delete the post
    let result: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost, getUsers };