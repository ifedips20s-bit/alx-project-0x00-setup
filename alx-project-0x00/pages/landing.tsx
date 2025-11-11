import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Render Card */}
      <Card />

      {/* Buttons with different sizes and shapes */}
      <div className="mt-6 flex gap-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full" />
      </div>
    </div>
  )
}

export default Landing
