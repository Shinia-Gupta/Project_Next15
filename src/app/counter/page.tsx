//This component shos that the metadata cannot be configured with client component
// As soon as I add the metadata object and chck the counter route, it gives this error-
// ## Error Type
// Build Error

import { Counter } from "./Counter";

// ## Error Message
// Ecmascript file had an error

// ## Build Output
// ./src/app/counter/page.tsx:5:14
// Ecmascript file had an error
//   3 | import { useState } from "react"
//   4 |
// > 5 | export const metadata={
//     |              ^^^^^^^^
//   6 |     title:"Counter Page Metadata title"
//   7 | }
//   8 |

// You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/docs/app/api-reference/directives/use-client


// "use client"

// import { useState } from "react"

//try uncommenting this metadata object and check the error
//we cannot configure metadata in client component
//metadata can be configured only in server components
//if we want to configure metadata in client component
//then we have to convert it to server component by removing "use client" directive
// export const metadata={
//     title:"Counter Page Metadata title"
// }


//Now I have created it as a server component and importing the client component separately into it. We can use metadat object for this page now
export const metadata={
    title:"Counter Page Metadata title"
}


export default function CounterPage() {
    // const [count,setCount]=useState(0);
  return (
    // <main>
    //   <h1>Welcome to Counter Page!</h1>
    //   <h2>Count: {count}</h2>
    //   <button onClick={()=>setCount(count+1)}>Increment</button>
    //   <button onClick={()=>setCount(count-1)}>Decrement</button>
    // </main>
    <Counter/>
  );
}