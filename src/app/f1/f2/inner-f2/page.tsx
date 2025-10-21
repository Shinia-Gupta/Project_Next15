import Link from "next/link";

export default function innerF2(){
    return(
        <>
        <h2>innerF2 page</h2>
        <Link href={"/f5"}>Navigate to F5</Link><br/>
        </>
    )
}