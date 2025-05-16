import { Calendar, Check } from 'lucide-react';

const LifeChangelog = () => {
  return (
    <section className="py-10 animate-fade-in">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-6 font-heading">Life Changelog and Updates</h2>
        
        <div className="space-y-4">
          {/* 2025 Entry */}
          <div className="bg-secondary/20 border border-white/5 rounded-lg p-4 card-hover">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar size={18} className="text-primary" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium mb-3">2025</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Check size={14} className="text-primary shrink-0" />
                      <span className="font-medium">6+ months of internship done 🚀</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Gained valuable industry experience working with professional teams on real-world projects.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Check size={14} className="text-primary shrink-0" />
                      <span className="font-medium">Feature from scratch impacting 2+ lac users daily 🔥</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Designed and implemented a production feature handling data for over 200,000 users every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2024 Entry */}
          <div className="bg-secondary/20 border border-white/5 rounded-lg p-4 card-hover">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar size={18} className="text-primary" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium mb-3">2024</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Check size={14} className="text-primary shrink-0" />
                      <span className="font-medium">Solved 500+ DSA questions 💻</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Strengthened algorithmic thinking and coding skills through consistent practice.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Check size={14} className="text-primary shrink-0" />
                      <span className="font-medium">Completed 2 web development internships ⚡</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Applied my skills in professional environments, contributing to real-world projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeChangelog;