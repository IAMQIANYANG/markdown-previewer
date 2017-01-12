import React, { Component }  from 'react'
import './App.css'

const DEFAULT_STRING = `# h1\n## h2\n### h3
                        \nNormal paragraph
                        \n*Emphasis*
                        \n**Strong emphasis**
                        \n**asterisks and _underscores_**.
                        \n1. First ordered list item
                        \n2. Another item
                        \n   * Unordered sub-list. 
                        \n1. Actual numbers don't matter, just that it's a number
                        \n   1. Ordered sub-list
                        \n 4. And another item.
                        \n\n Learn more: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)`
const marked = require('marked');


const TextInput = ({onChange, value}) =>
      <div className="col-md-6">
        <textarea rows="25" value={value} onChange={onChange} />
      </div>;

const Preview = ({toTransform}) =>
      <div className="col-md-6" dangerouslySetInnerHTML={toTransform()} />;

const Footer = (props) =>
      <div className="col-md-12 footer">By <a href="https://www.freecodecamp.com/iamqianyang">Cheska (Qian) Yang</a>
      </div>;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: DEFAULT_STRING
    };

    this.handleInput = this.handleInput.bind(this);
    this.transformMarkdown = this.transformMarkdown.bind(this)

  }

  handleInput(e) {
    this.setState({input: e.target.value})
  }

  transformMarkdown(){
    return {__html: marked(this.state.input, {sanitize: true})}
  }
  
  render(){
    const { input } = this.state;

    return(
      <div className="row">
        <h1 className="title">Markdown Previewer</h1>
        <TextInput value={input} onChange={this.handleInput}/>
        <Preview toTransform={this.transformMarkdown}/>
        <Footer />
      </div>
    )
    
  }
}


export default App