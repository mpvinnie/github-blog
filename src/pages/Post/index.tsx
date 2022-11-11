import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { PostContainer, PostContent, PostInfo } from './styles'

const markdown = `
  Programming languages all have built-in data structures, but these often
  differ from one language to another. This article attempts to list the
  built-in data structures available in JavaScript and what properties
  they have. These can be used to build other data structures. Wherever
  possible, comparisons with other languages are drawn.
  &nbsp;

  &nbsp;
  
  [Dynamic typing](http://localhost:5173)

  JavaScript is a loosely typed and
  dynamic language. Variables in JavaScript are not directly associated
  with any particular value type, and any variable can be assigned (and
  re-assigned) values of all types:
  
  ~~~js
  let foo = 42;   // foo is now a number
  foo = 'bar';    // foo is now a string
  foo = true;     // foo is now a boolean
  ~~~
`

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <NavLink to='/'>
            <CaretLeft weight='bold' />
            VOLTAR
          </NavLink>
          <NavLink to='#'>
            VER NO GITHUB
            <ArrowSquareOut weight='bold' />
          </NavLink>
        </nav>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <a href='#'>
            <GithubLogo weight='fill' />
            mpvinnie
          </a>
          <a href='#'>
            <Calendar weight='fill' />
            Há 1 dia
          </a>
          <a href='#'>
            <ChatCircle weight='fill' /> 5 comentários
          </a>
        </footer>
      </PostInfo>
      <PostContent
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                useInlineStyles={false}
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag='div'
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {markdown}
      </PostContent>
    </PostContainer>
  )
}
