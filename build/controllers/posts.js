"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//get users data.
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            route_auth: 'LqA[3br%H{Am1r2aFmXx_=Z1r1'
        }
    };
    //call the api to get data.
    let result = yield axios_1.default.get('http://apis-demo-om25091210.vercel.app/users/all', config);
    // will save the data and show again.
    let users = result.data;
    //send the response and return.
    return res.status(200).json({
        Users: users
    });
});
// getting all posts
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some posts
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts = result.data;
    return res.status(200).json({
        message: posts
    });
});
// getting a single post
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the post id from the req
    let id = req.params.id;
    // get the post
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post = result.data;
    return res.status(200).json({
        message: post
    });
});
//updating a post
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let id = req.params.id;
    //get the data from req.body
    let title = (_a = req.body.title) !== null && _a !== void 0 ? _a : null;
    let body = (_b = req.body.body) !== null && _b !== void 0 ? _b : null;
    //update the post
    let response = yield axios_1.default.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        text: title,
        body: body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
});
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //get the post id
    let id = req.params.id;
    //delete the post
    let result = yield axios_1.default.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
});
// adding a post
const addPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the data from req.body
    let title = req.body.title;
    let body = req.body.body;
    // add the post
    let response = yield axios_1.default.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
});
exports.default = { getPosts, getPost, updatePost, deletePost, addPost, getUsers };
