import { Card, CardContent } from "./Card";
import { Code, Database } from "lucide-react";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proficient in modern web development technologies with hands-on experience in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">HTML5</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">CSS3</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">JavaScript</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">React</span>
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">Node.js</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">Next.js</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">Django</span>
              </div>
            </CardContent>
          </Card>

          {/* Database Skills */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">MongoDB</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { skill: "JavaScript", level: 85 },
                { skill: "React", level: 80 },
                { skill: "Node.js", level: 75 },
                { skill: "Next.js", level: 70 }
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">{skill}</span>
                    <span className="text-slate-500">{level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 skill-progress"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { skill: "HTML/CSS", level: 90 },
                { skill: "MongoDB", level: 75 },
                { skill: "Django", level: 65 }
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">{skill}</span>
                    <span className="text-slate-500">{level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 skill-progress"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
