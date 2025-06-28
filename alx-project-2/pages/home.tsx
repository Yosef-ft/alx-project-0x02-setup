import React from "react"
import Card from "@/components/common/Card";

const Home: React.FC = () => {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen text-center space-y-6">
            <h1>Home</h1>
            <div>
                <Card title="Title" content="Content" />
            </div>
        </div>
    )
}

export default Home;