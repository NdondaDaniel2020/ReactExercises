import { useState, type ReactNode } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


interface SocialProps
{
  children: ReactNode;
}

interface SocialLinkItemProps
{
  href: string;
  tag: string;
  label: ReactNode;
}

function Center(): React.JSX.Element
{
  const [count, setCount] = useState<number>(0)

  return (
        <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
  );
}

function Docs(): React.JSX.Element
{
  return (
    <div id="docs">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2>Documentation</h2>
      <p>Your questions, answered</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank">
            <img className="logo" src={viteLogo} alt="" />
            Explore Vite
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank">
            <img className="button-icon" src={reactLogo} alt="" />
            Learn more
          </a>
        </li>
      </ul>
    </div>
  );
}

function Social({children}: SocialProps): React.JSX.Element
{
  return (
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {children}
          </ul>
        </div>
  );
}

function SocialLinkItem({href, tag, label}:SocialLinkItemProps): React.JSX.Element
{
  return (
        <li>
          <a href={href} target="_blank" rel="noreferrer">
            <svg
              className="button-icon"
              aria-hidden="true"
            >
              <use href={`/icons.svg${tag}`}></use>
            </svg>
            {label}
          </a>
        </li>
  );
}

function App(): React.JSX.Element
{
  return (
    <>
      <Center />

      <div className="ticks"></div>

      <section id="next-steps">
        <Docs />
        <Social>
          <SocialLinkItem href="https://github.com/vitejs/vite" tag="#github-icon" label="GitHub" />
          <SocialLinkItem href="https://chat.vite.dev/" tag="#discord-icon" label="Discord" />
          <SocialLinkItem href="https://x.com/vite_js" tag="#x-icon" label="X.com" />
          <SocialLinkItem href="https://bsky.app/profile/vite.dev" tag="#bluesky-icon" label="Bluesky" />
        </Social>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
