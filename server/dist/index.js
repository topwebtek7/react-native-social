"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const app = new koa_1.default();
const router = new koa_router_1.default();
const feed = [
    {
        id: "2e4",
        type: "status",
        body: "I went to the gym today. I will be sore tomorrow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        media: [],
        author: {
            name: "Bob Flannery",
            avatar: "https://www.fillmurray.com/200/200"
        },
        date: "2019-07-27T02:24:36+0000"
    },
    {
        id: "5da6",
        type: "poll",
        prompt: "What is your favorite super hero?",
        options: [
            {
                id: "7D85B99D-2EF0-4CA8-A48E-93BDCD6F0CAF",
                text: "Batman",
                responses: 12
            },
            {
                id: "7D85B99D-2EF0-4CA8-A48E-93BDCD6F0CAF",
                text: "Lego™ Batman",
                responses: 96
            },
            {
                id: "7D85B99D-2EF0-4CA8-A48E-93BDCD6F0CAF",
                text: "Antman",
                responses: 1
            },
            {
                id: "7D85B99D-2EF0-4CA8-A48E-93BDCD6F0CAF",
                text: "Wolverine",
                responses: 13
            }
        ],
        author: {
            name: "Amy Dahl",
            avatar: "https://www.fillmurray.com/200/302"
        },
        date: "2019-07-27T02:24:36+0000"
    },
    {
        id: "2e12",
        type: "status",
        body: "My trip to Utah",
        media: [
            {
                type: "photo",
                uri: "https://i.redd.it/mpgm7qlg8er21.jpg"
            }
        ],
        author: {
            name: "Cindy Lapinski",
            avatar: "https://www.fillmurray.com/212/306"
        },
        date: "2019-07-27T02:24:36+0000"
    }
];
router.get("/", (ctx, next) => {
    ctx.response.set({
        ["Content-Type"]: "application/json"
    });
    ctx.body = JSON.stringify(feed);
});
router.post("/post", (ctx, next) => { });
app.use(router.routes()).use(router.allowedMethods());
app.listen("7070");
