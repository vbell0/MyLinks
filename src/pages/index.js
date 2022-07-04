import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pica_pau from '../public/pica_pau.png'

export default function Home() {
  const links = [
    {
      href: 'https://www.instagram.com/victorbelo5g/',
      label: 'Instagram',
      id: 1
    },
    {
      href: 'https://www.facebook.com/victor0981/',
      label: 'Facebook',
      id: 2
    },
    {
      href: 'https://www.linkedin.com/in/victor-belo-69b079187/',
      label: 'LinkedIn',
      id: 3
    },
    {
      href: 'https://twitter.com/vh712',
      label: 'Twitter',
      id: 4
    },
    {
      href: 'https://github.com/vbell0',
      label: 'GitHub',
      id: 0
    }
  ]

  let ordenedLinks = links.sort(function (a, b) { if (a.id < b.id) { return -1; }; if (a.id > b.id) { return 1; } return 0; })

  return (
    <div className={styles.container}>
      <Head>
        <title>My Links</title>
      </Head>

      <body>
        <main className={styles.main}>
          <div className={styles.backgroundPicture}>
            <Image className={styles.profilePic} src={pica_pau} alt='Pica-Pau' width={100} height={100} />
          </div>

          <h1 className={styles.title}>
            Victor Belo
          </h1>

          <p className={styles.description}>
            @vbell0
          </p>

          <ul className={styles.social}>
            {ordenedLinks.map(({ href, label }) => (
              <li key={label}>
                <a className={styles.socialButton} href={href} rel="noopener" key={label}> {label} </a>
              </li>
            ))}
          </ul>
        </main>
      </body>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}, Victor Belo
        </p>
      </footer>
    </div>
  )
}
