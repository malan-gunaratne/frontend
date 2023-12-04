
import styles from './index.module.scss';
import Green from './components/Text/Green'

export default function Home() {
    return (
        <main>
            <section className={styles.title}>
                <h1>Malan</h1>
                <h2>Web Developer</h2>
            </section>
            <section className={styles.status}>
                It's been a couple of months since I've coded anything, so I'm going to be working on this site to get back into the swing of things.
                <br/>
                <br/>
                <br/>
                Here's a list of steps I need to take as I get back into things:
                <br/>
                <br/>
                <ul>
                    <li>Server setup <Green>✓ Dec 2</Green></li>
                    <li>Setup workspaces on Notion <Green>✓ Dec 5</Green></li>
                    <li>Setup & Integrate GPT-4 into workflow</li>
                    <li>Revisit the Nextjs docs - Go through the updated tutorials on the NextJS website</li>
                    <li>Revisit React and TypeScript</li>
                    <li>Plan features & Estimate Timelines</li>
                    <li>Design website on Figma</li>
                    <li>Build</li>
                </ul>
                <br/>
                <div>
                    Last updated @ December 5 2023
                </div>
            </section>
        </main>
    )
}