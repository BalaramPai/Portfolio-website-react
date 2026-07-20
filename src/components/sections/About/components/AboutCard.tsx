import {
  GraduationCap,
  Building2,
  ChartNoAxesColumn,
} from "lucide-react";

import profileImage from "../../../../assets/images/profile.webp";

export default function AboutCard() {
  return (
    <div className="sticky top-32 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <img
          src={profileImage}
          alt="Balaram Pai"
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-[30px] font-bold text-white">
          Balaram Pai
        </h3>

        <p className="mt-1 text-slate-400">
          Software Engineer
        </p>

        {/* Academic Information */}

        <div className="mt-6 space-y-4">

          <div className="flex items-start gap-3">
            <GraduationCap
              size={18}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <div>
              <p className="text-sm font-medium text-white">
                B.E. Computer Science & Business Systems
              </p>

              <p className="text-xs text-slate-500">
                Undergraduate
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2
              size={18}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <div>
              <p className="text-sm font-medium text-white">
                BMS Institute of Technology & Management
              </p>

              <p className="text-xs text-slate-500">
                Bengaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ChartNoAxesColumn
              size={18}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <div>
              <p className="text-sm font-medium text-white">
                CGPA: 8.XX / 10
              </p>

              <p className="text-xs text-slate-500">
                Current Academic Performance
              </p>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
}