import Button from "../../../common/Button";

export default function HeroActions() {
    return (
        <div className="flex gap-5">

            <Button>
                View Projects
            </Button>

            <Button variant="outline">
                Download Resume
            </Button>

        </div>
    );
}