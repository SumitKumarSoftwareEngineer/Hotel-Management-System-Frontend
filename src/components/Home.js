import React from 'react';
import {
  Calendar,
  Clipboard,
  Cog,
  DollarSign,
  HeartPulse,
  Hospital,
  Shield,
  User,
  Users,
  Clock,
  ChartBar,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, primary, onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl shadow-md transition-all duration-200 ${
      primary
        ? 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400'
        : 'text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-400'
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ icon: Icon, title, description, primary }) => (
  <div
    className={`rounded-xl shadow-lg p-6 transition-transform hover:scale-105 duration-200 ${
      primary ? 'bg-white' : 'bg-gray-50'
    }`}
  >
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button primary>Explore</Button>
  </div>
);

const Section = ({ children, bg, height }) => (
  <section className={`${height || 'py-20'} ${bg} content-center`}>
    <div className="container mx-auto px-4 h-full">{children}</div>
  </section>
);

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Hospital className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Hospital Management
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Button primary onClick={() => handleButtonClick('/login')}>
            Login
          </Button>
          <Button onClick={() => handleButtonClick('/signup')}>Sign Up</Button>
        </nav>
      </header>

      <main className="flex-1">
        <Section bg="bg-gradient-to-r from-blue-600 to-indigo-500" height="min-h-[30rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-6 text-left leading-tight">
                Streamline Your Hospital <br /> Management
              </h1>
              <p className="text-lg text-white mb-10 text-left opacity-90">
                Our hospital management system helps you optimize patient care, streamline operations,
                and improve overall efficiency.
              </p>
              <div className="flex gap-4 justify-left">
                <Button primary onClick={() => handleButtonClick('/login')}>
                  Explore Features
                </Button>
                <Button onClick={() => handleButtonClick('/login')}>Appointments</Button>
              </div>
            </div>
            <div className="bg-white w-full h-full min-h-[20rem] rounded-xl overflow-hidden shadow-xl">
              <img src="home-1.jpeg" alt="home" className="object-cover w-full h-full" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Patient Management',
                description: 'Efficiently manage patient records, appointments, and medical history.'
              },
              {
                icon: Hospital,
                title: 'Doctor Management',
                description: 'Manage doctor profiles, schedules, and patient assignments.'
              },
              {
                icon: Calendar,
                title: 'Appointment Scheduling',
                description: 'Streamline appointment booking and management for patients and doctors.'
              }
            ].map((card, index) => (
              <Card key={index} {...card} primary />
            ))}
          </div>
        </Section>

        <Section bg="bg-gray-100" height="min-h-[25rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 w-full h-64 min-h-[18rem] rounded-lg overflow-hidden flex justify-center items-center">
              <img src="home-2.jpeg" alt="hospital" className="w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-left">Modernize Your Hospital Operations</h2>
              <p className="text-xl text-gray-600 mb-8 text-left">
                Our hospital management system provides cutting-edge features to streamline your workflows, improve
                patient satisfaction, and drive better outcomes.
              </p>
              <div className="flex gap-4 justify-left">
                <Button primary onClick={() => handleButtonClick('/login')}>
                  Explore Features
                </Button>
                <Button onClick={() => handleButtonClick('/login')}>Appointments</Button>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-extrabold mb-12 text-center text-blue-700">
            Why Choose Our Hospital Management System?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clipboard,
                title: 'Improved Efficiency',
                description:
                  'Streamline admin tasks, reduce paperwork, and improve overall hospital performance.'
              },
              {
                icon: Users,
                title: 'Enhanced Patient Care',
                description:
                  'With complete patient records and smart scheduling, offer better care to your patients.'
              },
              {
                icon: DollarSign,
                title: 'Cost Savings',
                description:
                  'Optimize your operations and reduce extra costs using our system’s smart tools.'
              },
              {
                icon: HeartPulse,
                title: 'Better Outcomes',
                description:
                  'Boost patient satisfaction and health outcomes with simplified care processes.'
              },
              {
                icon: Shield,
                title: 'Secure Data',
                description:
                  'Your hospital data stays protected with advanced security and role-based access.'
              },
              {
                icon: Cog,
                title: 'Custom Workflows',
                description:
                  'Easily customize the system to match your hospital’s workflow and services.'
              },
              {
                icon: Clock,
                title: 'Time-Saving',
                description:
                  'Automate repetitive work and free up time for doctors and staff.'
              },
              {
                icon: ChartBar,
                title: 'Smart Analytics',
                description:
                  'Make better decisions with graphs, reports, and key performance stats.'
              },
              {
                icon: Globe,
                title: 'Scalable System',
                description:
                  'Works for single clinics or big hospitals – scalable for any size.'
              }
            ].map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-blue-50 py-6 border-t">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 <span className="font-semibold text-blue-600">Hospital Management</span>. Built with ❤️ by{' '}
            <span className="text-blue-700">Sumit</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
