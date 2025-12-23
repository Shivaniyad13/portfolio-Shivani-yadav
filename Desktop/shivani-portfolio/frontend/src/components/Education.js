import { University, GraduationCap, School, MapPin } from "lucide-react";
import "../styles/Education.css"; // 👈 make sure this CSS file exists

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic journey and educational background that laid the foundation for my career.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* University Education */}
          <div className="education-card bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="icon-circle bg-blue-100 mr-4">
                <University className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Bachelor of Technology
                </h3>
                <p className="text-slate-600">Currently Pursuing</p>
              </div>
            </div>

            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <School className="text-blue-600 w-5 h-5 mr-3" />
                <span>Babu Banarasi Das University</span>
              </li>
              <li className="flex items-center">
                <MapPin className="text-blue-600 w-5 h-5 mr-3" />
                <span>Lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="text-blue-600 w-5 h-5 mr-3" />
                <span>In Progress</span>
              </li>
            </ul>

            <div className="info-box mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700 text-sm leading-relaxed">
                Pursuing a comprehensive Computer Science curriculum with focus on
                software engineering, data structures, algorithms, and modern web technologies.
              </p>
            </div>
          </div>

          {/* School Education */}
          <div className="education-card bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="icon-circle bg-green-100 mr-4">
                <GraduationCap className="text-green-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  School Education
                </h3>
                <p className="text-slate-600">Completed</p>
              </div>
            </div>

            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <School className="text-green-600 w-5 h-5 mr-3" />
                <span>School in Deoria</span>
              </li>
              <li className="flex items-center">
                <MapPin className="text-green-600 w-5 h-5 mr-3" />
                <span>Deoria, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="text-green-600 w-5 h-5 mr-3" />
                <span>Completed</span>
              </li>
            </ul>

            <div className="info-box mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-slate-700 text-sm leading-relaxed">
                Completed foundational education with strong academic performance,
                developing critical thinking and problem-solving skills that form
                the base of my technical and creative abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
