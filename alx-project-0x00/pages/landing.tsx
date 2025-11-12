import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <Card />

            <div className="flex flex-wrap justify-center gap-4">
                <Button title="Small Button" styles="text-sm px-3 py-1 rounded-sm" />
                <Button title="Small Button" styles="text-sm px-3 py-1 rounded-md" />
                <Button title="Small Button" styles="text-sm px-3 py-1 rounded-lg" />

                <Button title="Medium" styles="text-base px-4 py-2 rounded-sm" />
                <Button title="Medium" styles="text-base px-4 py-2 rounded-md" />
                <Button title="Medium" styles="text-base px-4 py-2 rounded-lg" />

                <Button title="Large Button" styles="text-lg px-6 py-3 rounded-sm" />
                <Button title="Large Button" styles="text-lg px-6 py-3 rounded-md" />
                <Button title="Large Button" styles="text-lg px-6 py-3 rounded-full" />
            </div>
        </div>
    )
}

export default Landing;