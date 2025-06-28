import React from "react"
import Button from "@/components/common/Button";

const About: React.FC = () => {
    return(

        <div className="flex flex-col justify-center items-center min-h-screen text-center space-y-6 p-8">
            <h1>About</h1>
            <div className="space-y-6">
                <Button title="Small Button" size="small" shape="rounded-sm" />
                <Button title="Medium Button" size="medium" shape="rounded-md" />
                <Button title="Large Button" size="large" shape="rounded-full" />
            </div>
        </div>
    )
}

export default About;