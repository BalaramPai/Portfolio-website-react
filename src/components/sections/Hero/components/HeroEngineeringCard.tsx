export default function HeroEngineeringCard() {
    return (
        <div className="relative h-[650px] rounded-[36px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-2xl">

            <div className="mb-10 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-red-400" />

                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-slate-700 text-center text-slate-500">

                Engineering Visualization

                <br />

                (Coming Next)

            </div>

        </div>
    );
}