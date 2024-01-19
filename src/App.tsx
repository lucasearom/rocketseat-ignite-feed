import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: sting

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/lucasearom.png",
            name: "Lucas Moraes",
            role: "Dev Front-end",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2024-01-15 16:35:21"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/lucasearom.png",
            name: "Lucas Searom",
            role: "Estudante",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content: "Ariana fracassada",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2024-01-15 16:39:21"),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}
