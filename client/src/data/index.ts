import { IComment, ILike, IPost, IUser } from "../interfaces";

export const Users: IUser[] = [
    {
        id: "1",
        password: "123",
        email: "musk@abv.bg",
        firstName: "Elon",
        lastName: "Musk",
        coverPic: "https://image.cnbcfm.com/api/v1/image/101717965-494553365.jpg?v=1583511833",
        profilePic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
        connections: [],
        posts: ["2133124"]
    },
    {
        id: "2",
        password: "123",
        email: "mark@abv.bg",
        firstName: "Mark",
        lastName: "Zuckerberg",
        coverPic: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/12/mark-zuckerberg-facebook-1210201.jpg",
        profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
        connections: [],
        posts: ["435342"]
    },
    {
        id: "3",
        password: "123",
        firstName: "Brendan",
        lastName: "Eich",
        email: "brendan@abv.bg",
        profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        coverPic: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
        connections: [],
        posts: []
    },
    {
        id: "4",
        password: "123",
        firstName: "Iliyan",
        lastName: "Nikolaev",
        email: "ilich@abv.bg",
        coverPic: "https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/pass/Culture_Matrix_Code_corridor.jpg",
        profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
        connections: [],
        posts: ["fdhgf664"]
    },
]

export const Posts: IPost[] = [
    {
        id: "2133124",
        owner: { id: "1", firstName: "Elon", lastName: "Musk", profilePic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg" },
        textContent: "Lets make Twitter maximum fun!",
        img: "https://imageio.forbes.com/specials-images/imageserve/64f8e481ed69b0d89df9e2c7/Twitter-rebrands-to-X/960x0.png?format=png&width=960",
        likes: ["udfhs8769", "aksfj8965"],
        comments: ["fsjdhfs77235", "fas4df8321", "fda6s5f4as6"]
    },
    {
        id: "435342",
        owner: {
            id: "2", firstName: "Mark", lastName: "Zuckerberg",
            profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*"
        },
        textContent: "So many interesting people are following me. I think I'll follow some of you guys as well.",
        img: "https://noyb.eu/sites/default/files/styles/media_xlarge/public/2023-10/basic_meta_6.png?itok=26tjbf3Z",
        likes: ["saf5789", "fsafgds165"],
        comments: []
    },
    {
        id: "654756",
        owner: { id: "3", firstName: "Brendan", lastName: "Eich", profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" },
        textContent: "What is JavaScript?",
        img: "https://blog.logrocket.com/wp-content/uploads/2020/12/localstorage-javascript-complete-guide.png",
        likes: [],
        comments: []
    },
    {
        id: "fdhgf664",
        owner: {
            id: "4",
            firstName: "Iliyan",
            lastName: "Nikolaev",
            profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
        },
        textContent: "I'm doing this social media for a portfolio, looks good for now? What do you think?",
        img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/99871876.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
        likes: [],
        comments: []
    },
]


export const Likes: ILike[] = [
    {
        id: "udfhs8769",
        post: "2133124", //ref posts
        owner: {
            id: "2",
            firstName: "Mark",
            lastName: "Zuckerberg",
            profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
        }, // ref user populate id, firstName, lastName, profilePic
    },
    {
        id: "aksfj8965",
        post: "2133124", //ref posts
        owner: {
            id: "3",
            firstName: "Brendan",
            lastName: "Eich",
            profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        }, // ref user populate id, firstName, lastName, profilePic
    },
    {
        id: "saf5789",
        post: "435342", //ref posts
        owner: {
            id: "4",
            firstName: "Iliyan",
            lastName: "Nikolaev",
            profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
        }, // ref user populate id, firstName, lastName, profilePic
    },
    {
        id: "fsafgds165",
        post: "435342", //ref posts
        owner: {
            id: "3",
            firstName: "Brendan",
            lastName: "Eich",
            profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        }, // ref user populate id, firstName, lastName, profilePic
    },
];

export const Comments: IComment[] = [
    {
        id: "fsjdhfs77235",
        post: "2133124",
        owner: {
            id: "2",
            firstName: "Mark",
            lastName: "Zuckerberg",
            profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
        }, // ref user populate id, firstName, lastName, profilePic
        textContent: "hellooooo",
    },
    {
        id: "fas4df8321",
        post: "2133124",
        owner: {
            id: "4",
            firstName: "Iliyan",
            lastName: "Nikolaev",
            profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
        }, // ref user populate id, firstName, lastName, profilePic
        textContent: "testing comment",
    },
    {
        id: "fda6s5f4as6",
        post: "2133124",
        owner: {
            id: "3",
            firstName: "Brendan",
            lastName: "Eich",
            profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        }, // ref user populate id, firstName, lastName, profilePic
        textContent: "JavaScript comment",
    }
];

// {
//     id: "2",
//     firstName: "Mark",
//     lastName: "Zuckerberg",
//     profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
// },
// {
//     id: "3",
//     firstName: "Brendan",
//     lastName: "Eich",
//     profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
// },
// {
//     id: "4",
//     firstName: "Iliyan",
//     lastName: "Nikolaev",
//     profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
// }