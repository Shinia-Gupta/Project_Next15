import Link from "next/link"

export default function f1(){
    return(
    <>
    <div>F1 Page</div>
<div>
    <Link href={"/f1/f2"}>Navigate to F2</Link><br/>
    <Link href={"/f3"}>Navigate to F3</Link>

</div>
    </>
    )
}