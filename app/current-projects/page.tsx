import React from 'react';
import Image from 'next/image';

const CurrentProjectsPage = () => {
  return (
    <div className="pt-28 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-white">
        Current Projects
      </h1>

      {/* IMAV 2025 Section */}
      <section id="imav2025" className="mb-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex items-center justify-center">
            <Image
              src="/images/imav2025.jpg" // Place your image in /public/images/
              alt="IMAV 2025 Project"
              width={400}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">IMAV 2025</h2>
            <p className="mb-4 text-lg">
              The International Micro Air Vehicle (IMAV) competition challenges teams to design and build micro aerial vehicles (MAVs) that can perform autonomous missions in complex environments.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Problem Statement:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Autonomous navigation in GPS-denied environments</li>
                <li>Object detection and recognition tasks</li>
                <li>Precision landing and payload delivery</li>
                <li>Multi-vehicle coordination challenges</li>
              </ul>
            </div>
            <div className="mt-6">
              <a 
                href="https://www.imavs.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Official Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IRoC-U 2025 Section */}
      <section id="irocu2025" className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex items-center justify-center">
            <Image
              src="/images/irocu2025.jpg" // Place your image in /public/images/
              alt="IRoC-U 2025 Project"
              width={400}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">IRoC-U 2025</h2>
            <p className="mb-4 text-lg">
              ISRO Robotics Challenge (IRoC-U) focuses on developing autonomous navigation systems for aerial vehicles for Martian exploration scenarios.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Problem Statement:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Autonomous Navigation for Aerial Vehicles (ANAV) without external navigation aids</li>
                <li>Safe landing spot identification in unknown terrain</li>
                <li>Stable vertical take-off, hover, and landing in simulated Martian conditions</li>
                <li>Return to home position after completing mission objectives</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold mb-1">Key Dates:</h4>
                <ul className="text-sm space-y-1">
                  <li>Final Field Round: July 25-30, 2025</li>
                  <li>Awards Ceremony: August 23, 2025</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Venue:</h4>
                <p className="text-sm">URSC Bengaluru Campus</p>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://www.ursc.gov.in/IRoC-U2025/RulebookIRoC-U2025_V2.0.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-4"
              >
                Rulebook (PDF)
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </a>
              <a 
                href="https://www.ursc.gov.in/IRoC-U2025/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                Official Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentProjectsPage;

