// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const video = [
    {
        src: "https://www.youtube.com/embed/q-urJWcJcFQ",
        title: "Title Video 1"
    },
    {
        src: "https://www.youtube.com/embed/6YTYKTE7Gq4",
        title: "Title Video 2"
    },
    {
        src: "https://www.youtube.com/embed/j9X8ATntiqQ",
        title: "Title Video 3"
    },
    {
        src: "https://www.youtube.com/embed/6WIEOYaO3HQ",
        title: "Title Video 4"
    }
];

export default function allHandler(req, res) {
    res.status(200).json(video);
};

