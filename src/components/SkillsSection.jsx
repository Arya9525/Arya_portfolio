import React from "react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-secondary/40">
      <div className="container mx-auto max-w-7xl">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* FULL WIDTH BOX */}
        <div
          className="
            w-full 
            bg-card 
            border border-border 
            rounded-3xl 
      
            overflow-hidden 
            backdrop-blur-xl
            transition-all 
            duration-300 
            hover:shadow-primary/40
          "
        >
          {/* Attractive Header Bar */}
          <div className="
            w-full 
            py-6 
            px-10 
            text-xl 
            font-semibold 
            bg-gradient-to-r 
            from-primary/40 
            to-primary/10
            border-b 
            border-border
          ">
            Technical Skills Overview
          </div>

          {/* TABLE */}
          <table className="w-full text-left border-collapse text-lg">
            <tbody>

              {/* ROW TEMPLATE */}
              {[
                {
                  title: "Programming",
                  list: "C, C#, Java, Python",
                },
                {
                  title: "Frontend",
                  list: "HTML/CSS, JavaScript, React, Tailwind CSS, Bootstrap",
                },
                {
                  title: "Backend",
                  list: "Node.js, Express.js, EJS, MongoDB, SQL, ASP.Net",
                },
                {
                  title: "Tools",
                  list: "Git/GitHub, VS Code",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className="
                    border-b border-border 
                    transition-all 
                    duration-200 
                    hover:bg-secondary/50
                  "
                >
                  <th
                    className="
                      p-8 
                      w-1/3 
                      text-primary 
                      text-2xl 
                      font-semibold 
                      tracking-wide 
                      border-r 
                      border-border
                      bg-muted/20
                    "
                  >
                    {row.title}
                  </th>

                  <td className="p-8 text-foreground/90 leading-relaxed text-xl">
                    {row.list}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
