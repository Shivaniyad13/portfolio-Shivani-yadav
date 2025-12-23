import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function Professional() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A dedicated developer passionate about creating innovative solutions
            and continuously learning new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Professional Journey
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Currently pursuing B.Tech from Babu Banarasi Das University,
              Lucknow, I've gained valuable industry experience working at
              alka.tech Pvt.Ltd. My educational foundation from Ayodhya,
              combined with hands-on development experience, has shaped me into
              a well-rounded developer.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I specialize in full-stack development with expertise in modern
              web technologies. My goal is to create efficient, scalable, and
              user-friendly applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-slate-600">
                <MapPin className="text-primary w-4 h-4 mr-2" />
                <span>Lucknow, India</span>
              </div>
              <div className="flex items-center text-slate-600">
                <GraduationCap className="text-primary w-4 h-4 mr-2" />
                <span>B.Tech Student</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Briefcase className="text-primary w-4 h-4 mr-2" />
                <span>6 Months Experience</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-slate-600">Months Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-slate-600">Technologies</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-slate-600">Projects Built</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-slate-600">Dedication</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
