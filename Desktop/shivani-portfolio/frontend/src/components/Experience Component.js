import { Card, CardContent } from "./Card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and contributions to the tech industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/20"></div>

            {/* Experience Item */}
            <div className="relative flex items-start mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <Card className="ml-6 flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Software Developer
                    </h3>
                    <span className="text-primary font-medium">6 Months</span>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    alka.tech Pvt.Ltd.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Gained hands-on experience in full-stack web development,
                    working with modern technologies and contributing to various
                    client projects. Developed proficiency in React, Node.js,
                    and database management while collaborating with experienced
                    developers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      MongoDB
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Status */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <Card className="ml-6 flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Current Status
                    </h3>
                    <span className="text-green-600 font-medium">Present</span>
                  </div>
                  <p className="text-green-600 font-medium mb-2">
                    Actively Seeking Opportunities
                  </p>
                  <p className="text-slate-600">
                    Currently pursuing B.Tech and looking for new opportunities
                    to apply my skills and continue growing as a developer. Open
                    to full-time positions, internships, and freelance projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
