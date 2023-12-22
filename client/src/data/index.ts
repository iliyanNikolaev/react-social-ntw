import { IPost, IUser } from "../interfaces";

export const Users: IUser[] = [
    {
        id: "1",
        username: "elonSpaseX",
        password: "123",
        firstName: "Elon",
        lastName: "Musk",
        coverPic: "https://image.cnbcfm.com/api/v1/image/101717965-494553365.jpg?v=1583511833",
        profilePic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
        connections: [
            {
                id: "2",
                firstName: "Mark",
                lastName: "Zuckerberg",
                profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
            },
            {
                id: "3",
                firstName: "Brendan",
                lastName: "Eich",
                profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
            },
            {
                id: "4",
                firstName: "Iliyan",
                lastName: "Nikolaev",
                profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
            }
        ],
        posts: []
    },
    {
        id: "2",
        username: "markoFace",
        password: "123",
        firstName: "Mark",
        lastName: "Zuckerberg",
        coverPic: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/12/mark-zuckerberg-facebook-1210201.jpg",
        profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
        connections: [
            {
                id: "3",
                firstName: "Brendan",
                lastName: "Eich",
                profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
            },
            {
                id: "4",
                firstName: "Iliyan",
                lastName: "Nikolaev",
                profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
            },
            {
                id: "1",
                firstName: "Elon",
                lastName: "Musk",
                profilePic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
            },
        ],
        posts: []
    },
    {
        id: "3",
        username: "brendoSkripta",
        password: "123",
        firstName: "Brendan",
        lastName: "Eich",
        profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/220px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
        coverPic: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
        connections: [],
        posts: []
    },
    {
        id: "4",
        username: "ilich227",
        password: "123",
        firstName: "Iliyan",
        lastName: "Nikolaev",
        coverPic: "https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/pass/Culture_Matrix_Code_corridor.jpg",
        profilePic: "https://avatars.githubusercontent.com/u/121745595?v=4",
        connections: [],
        posts: []
    },
]

export const Posts: IPost[] = [
    {
        id: "2133124",
        owner: { id: "1", firstName: "Elon", lastName: "Musk", profilePic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg" },
        textContent: "Lets make Twitter maximum fun!",
        img: "https://imageio.forbes.com/specials-images/imageserve/64f8e481ed69b0d89df9e2c7/Twitter-rebrands-to-X/960x0.png?format=png&width=960",
        likes: [],
        comments: []
    },
    {
        id: "435342",
        owner: {
            id: "2", firstName: "Mark", lastName: "Zuckerberg",
            profilePic: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*"
        },
        textContent: "So many interesting people are following me. I think I'll follow some of you guys as well.",
        img: "https://noyb.eu/sites/default/files/styles/media_xlarge/public/2023-10/basic_meta_6.png?itok=26tjbf3Z",
        likes: [],
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

]