import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
    useEffect(()=>{
        document.title = 'Home';
    },[]);
    return (
        <div>
            <Typography variant="h4">Hello World</Typography>
        </div>
    );
}