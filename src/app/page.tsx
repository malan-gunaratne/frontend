
import styles from './index.module.scss';

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
                There are a couple of things I need to do:
                <ul>
                    <li>Server setup ✓</li>
                    <li>Revisit the Nextjs docs </li>
                    <li>Refamilarise with React and TypeScript</li>
                    <li>Build out the Frontend</li>
                    <li>Build out a backend CMS</li>
                </ul>
                <div>
                    Last updated @ 30 Nov 2023
                </div>
            </section>
        </main>
    )
}