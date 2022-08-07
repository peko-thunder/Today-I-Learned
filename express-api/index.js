import express from "express";

const app = express();
const server = app.listen(3000, () => console.log("Node.js is listening to PORT:" + server.address().port));
// http://localhost:3000/

// 写真のサンプルデータ
const photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },
    {
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
];

app.get("/api/photo/list", (req, res, next) => {
    res.json(photoList);
});

app.get("/api/photo/:photoId", (req, res, next) => {
    const photo = photoList.find(obj => obj.id === req.params.photoId);
    res.json(photo);
});
