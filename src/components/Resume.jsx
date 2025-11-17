const Resume = () => {
  return (
    <div className="p-10 m-10">
      <section>
        <div className="flex space-x-10">
          <h1 className="font-bold text-5xl ">Resume </h1>
          <a href="#experience" className="box-border size-24 rounded-full bg-red-500 font-bold text-center pt-8 hover:text-blue-200  delay-5s">Experience</a>
         <a href="#education" className="box-border size-24 rounded-full bg-orange-400 font-bold pt-8 text-center hover:text-white">Education</a>
    <a href="#skills" className="box-border size-24 rounded-full bg-green-400 font-bold pt-8 text-center hover:text-orange-600">    Skills</a>
          
        </div>
        <h3 className=" font-bold text-2xl ">
          <u id="experience">Work Experience</u>
        </h3>
        <div className="grid grid-cols-3 space-x-20 mt-10 float-right">
          <h3 className=" font-bold text-2xl ">
            Prabhat Shree Cotton India Pvt. Ltd.
          </h3>
          <span>
            <p className="float-right pr-20  font-bold">2017 - Present</p>
          </span>
          <span>
            <h2 className="font-bold">Operation Manager</h2>{" "}
          </span>
          <li>
            Manage office supplies, inventory and other daily business
            operations including inventory management and order processing. to
            ensure a smooth and efficient workflow.
          </li>
          <li>
            Analyzing operational data to identify trends and areas for
            improvement.
          </li>{" "}
          <li>
            Updating Records, Data Analysis, Document preparation, andReports
            generation with accuracy.. Maintain & prepare daily contracts,
            Approval,Dispatch etc.
          </li>
          <li>
            Prepare required deduction matrix. Implementing quality control
            measures to ensure products or services meet standards.
          </li>
          <li>Vendor reconciliation, Vendor co-ordination</li>
          <li>
            Handling internal and external communications, including emails and
            phone calls.
          </li>
          <li>
            Drafting and editing business correspondence, reports, and
            documentation.
          </li>
          <li>
            Maintaining and organizing financial & legal documents of vendors.
          </li>
          <li>Maintaining organized and up-to-date filing systems</li>
        </div>
      </section>
      <section>
        <div>
          <div className="grid grid-cols-3 space-x-20 mt-10 float-right">
            <h3 className=" font-bold text-2xl ">
              City Polyclinic & Multispecialty
            </h3>
            <span>
              <p className="float-right pr-20 font-bold ">2015 - 2017</p>
            </span>
            <span>
              <h2 className="font-bold">Front Desk Manager/ Administration</h2>{" "}
            </span>
            <li>
              Manage office supplies, inventory and other daily business
              operations including inventory management and order processing. to
              ensure a smooth and efficient workflow.
            </li>
            <li>
              Analyzing operational data to identify trends and areas for
              improvement.
            </li>{" "}
            <li>
              Updating Records, Data Analysis, Document preparation, andReports
              generation with accuracy.. Maintain & prepare daily contracts,
              Approval,Dispatch etc.
            </li>
            <li>
              Prepare required deduction matrix. Implementing quality control
              measures to ensure products or services meet standards.
            </li>
            <li>Vendor reconciliation, Vendor co-ordination</li>
            <li>
              Handling internal and external communications, including emails
              and phone calls.
            </li>
            <li>
              Drafting and editing business correspondence, reports, and
              documentation.
            </li>
            <li>
              Maintaining and organizing financial & legal documents of vendors.
            </li>
            <li>Maintaining organized and up-to-date filing systems</li>
          </div>
        </div>
      </section>

      <section>
        <h3 className=" font-bold text-2xl">
          <u id="education">Education</u>
        </h3>
        <h1 className=" font-bold text-xl ">
          Masters in Business Administration In H.R & I.T
        </h1>
        <p>Apex Institute of management & research, Indore (M.P)</p>
        <br />

        <h1 className=" font-bold text-xl ">
          Post Graduation Diploma in Computer Application
        </h1>
        <p>Makhanlal University, Bhopal M.P</p>
        <br />
        <h1 className=" font-bold text-xl ">Bachelor of Commerce</h1>
        <p>Mata Jijabai GirlsP.G Collage ,Indore M.P</p>
      </section>

      <section>
        <h1 className="font-bold text-2xl mt-10">
          <u id="skills">Skills & Expertise</u>
        </h1>
        <p>
          Proficiency in using various office software such as Microsoft Office{" "}
          <br />
          Suite (Word, Excel ,PowerPoint),email clients, and calendar management
          tools. <br />
          Experience with HR management systems (HRIS) for record keeping,
          employee data management, and reporting.
          <br />
          Familiarity with applicant tracking systems(ATS)for managing
          recruitment processes.
          <br />
          Ability to quickly learn and adapt to new software and tools.
          <br />
          Microsoft Office(Excel, Word, Power point, Pivot, H-lookup, V-lookup,
          Macros)
          <br />
          Tally ERP9, Google Docs, Sheets, Slides, Forms , H.T.ML,C.SS,
          JavaScript(Beginner),Python(Beginner), Bootstrap, Mass Mailing ,Resume
          Writing.
          <br /> Familiarities with softwares like Suite CRM, Marg software,
          NGINE TECHNOLOGIES.
          <br />
          written and verbal communication skills for effective interaction with
          employees,vendors.
          <br /> Ability to maintain a professional and friendly demeanor while
          addressing inquiries and concerns.
          <br /> Excellent organizational and multitasking abilities to handle
          multiple priorities.
          <br /> Attention to detail and accuracy in managing administrative and
          HR tasks.
          <br /> Problem-solving skills to identify and resolve issues
          efficiently.
          <br /> Team player mindset with the ability to collaborate and work
          well in adverse environment.
          <br /> Multitasking and Quick learner & Team leading qualities.
          <br /> Hardworker & passionate to learn new skills and adapt new
          experience.
        </p>
        <div>
          <span>Phone 123-456-7890</span>

          <span>Email info@mysite.com</span>

          <span>Follow Me</span>

          <span>
            LinkedIn Twitter © 2035 By Nicol Rider. Powered and secured by Wix
          </span>
        </div>
      </section>
    </div>
  );
};
export default Resume;
