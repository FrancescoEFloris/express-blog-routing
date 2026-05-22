import express from "express";
import posts from "../data/posts.js";

const postsRouter = express.Router();

// Index: mostra la tutta la lista
postsRouter.get("/", (request, response) => {
    response.json(posts);
});

// Show: mostra solo quello che sto cercando
postsRouter.get("/:id", (request, response) => {
    const id = request.params.id;
    const idNum = Number(id);
    if (isNaN(idNum) || idNum <= 0) {
        response
            .status(404)
            .json({error: "Id not Found"})
            return;
    }
    const thisPost = posts.find(post => {
        return post.id === idNum
    });
    response.json(thisPost)
});

//Create:
postsRouter.post("/", (request, response) => {
    response.json({ messagge: "Creation request"})    
});

export default postsRouter;