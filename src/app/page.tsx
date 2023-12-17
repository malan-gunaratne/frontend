
import styles from './index.module.scss';
import './globals.css';
import Green from './components/Text/Green'

export default function Home() {
    return (
        <main>
            <section className={styles.title}>
                <h1>Malan</h1>
                <h2>Web Developer</h2>
            </section>
            <section className={styles.status}>
                It's been a couple of months since I've coded anything, so I'm going to be working on this website to get back into things.
                <br/>
                <br/>
                <br/>
                Here's a list of action steps for this project:
                <br/>
                <br/>
                <ul>
                    <li>Server setup <Green>✓ Dec 2</Green></li>
                    <li>Setup workspaces on Notion <Green>✓ Dec 5</Green></li>
                    <li>Explore content generation with GPT-4</li>
                    <li>Revisit the Nextjs docs: Complete the updated NextJS tutorial <a href="https://github.com/malan-gunaratne/nextjs-dashboard-app">here</a></li>
                    <li>Revisit React and TypeScript concepts</li>
                    <li>Build a small project with Next.js</li>
                    <li>Plan website features & estimate timeline</li>
                    <li>Design website on Figma</li>
                    <li>Develop website</li>
                </ul>
                <br/>
                <div>
                    Last updated @ December 18 2023
                </div>
            </section>
        </main>
    )
}