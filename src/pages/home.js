import { useEffect } from "react";

export default function Home() {
    useEffect(()=>{
        document.title = 'Home';
    },[]);
    return (
        <div>
        
        </div>
    );
}