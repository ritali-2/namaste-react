/*const heading = React.createElement("h1",
 {id:"heading"}
  ,"Hello World from React");
  
  console.log(heading) ; //object

const root = ReactDOM.createRoot(document.getElementById ("root"));
root.render(heading);
*/
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
</div>*/
//ReactElement(Object)  ---- Html(Browser understand)

const parent = React.createElement("div",
{id:"parent"},
[
    React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")]
),
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")]
)
]
)
const root = ReactDOM.createRoot(document.getElementById ("footer"));
root.render (parent);

