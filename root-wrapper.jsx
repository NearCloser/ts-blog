import React from 'react'
import { Link } from "gatsby"
import { MDXProvider } from '@mdx-js/react'
import Code from  '@components/code'
import { Caution, InfoBar, LeftBar, List, SolidBar, Title, TopBar } from "@/components/bars"

const BasicComponents = {    
  pre: ({ children })=> { 
    const child = children.props
      if (child.mdxType === 'code') {
        return (
          <Code
            codeString={child.children.trim()}
            language={child.className.replace('language-', '')}
            title={child.title}
            highlight={child.highlight}
            light={child.light}
            svelte={child.svelte}
          />
        )
      } else return null
  },
  p: (props)  => 
    <p style={{marginBottom: '1.5rem'}} {...props} />,
  ul:(props) => 
    <ul style={{marginLeft: ' 1.5rem'}} {...props} />,
  ol: (props)  =>
    <ol style={{marginLeft: '1.5rem'}} {...props} />,
  li: (props)  => 
    <li style={{marginBottom: 'calc(1.5rem / 2)'}} {...props} />,
}

const BarsComponents = {
  Link,
  TopBar, 
  InfoBar, 
  SolidBar, 
  LeftBar, 
  Title, 
  List, 
  Caution, 
}

const Root = ({ element }) => {

  return (
  <MDXProvider components={{...BarsComponents, ...BasicComponents}} >
    {element}
  </MDXProvider>
)}


export default Root