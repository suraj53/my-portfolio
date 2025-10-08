import React from 'react';

const experiences = [
	{
	  role: "Senior Software Engineer | Velocis Systems, Noida",
	  period: "Apr 2025 – Present",
	  details: [
		"Engineered Node.js APIs and Angular dashboards for CPCB’s nationwide environmental monitoring system serving 10k+ users.",
		"Implemented multi-level hierarchy and role-based authorization to secure access for national, state, and district-level users.",
		"Enhanced data reliability and reduced response latency through optimized caching and API-level performance improvements.",
	  ],
	},
	{
	  role: "Senior Software Engineer | Patch Infotech Pvt Ltd, Gurgaon",
	  period: "Oct 2021 – Apr 2025",
	  details: [
		"Delivered scalable Node.js and Angular platforms for e-commerce and logistics clients, improving order processing efficiency.",
		"Optimized APIs and database queries, reducing runtime by 80% and latency by 50%.",
		"Redesigned UI components to improve usability by 30% and cut page load time by 40%.",
		"Architected secure REST APIs, reducing integration failures by 70%.",
		"Led sprint planning, code reviews, and team mentorship — lowering defects by 15% and accelerating delivery speed by 20%.",
	  ],
	},
	{
	  role: "Software Engineer | Svayam Infoware Pvt Ltd, Lucknow",
	  period: "Jan 2020 – Oct 2021",
	  details: [
		"Developed a full-stack ERP system using Angular, Node.js, and SQL Server, improving client satisfaction by 30%.",
		"Optimized MySQL queries, boosting performance by 40% and improving API response times by 15%.",
		"Delivered efficient REST APIs and streamlined data flow between modules by 50%.",
		"Collaborated across teams to achieve 95% on-time project delivery.",
	  ],
	},
  ];
  const achievements = [
	{
	  title: "ERP System (Enterprise Suite)",
	  details: [
		"Architected an enterprise-grade ERP covering Finance, HRMS, Inventory, and Procurement modules.",
		"Automated workflows and optimized database queries, cutting manual effort by 40%.",
		"Enhanced scalability and data integrity for multi-department operations.",
	  ],
	},
	{
	  title: "Ecommerce ERP Platform",
	  details: [
		"Engineered a multi-channel ERP integrating orders, payments, logistics, and CRM systems.",
		"Automated inventory synchronization across marketplaces, reducing order processing time by 60%.",
		"Implemented analytics dashboards for better operational insights.",
	  ],
	},
	{
	  title: "Kumbh Mela Registration & Crowd Management System",
	  details: [
		"Designed and implemented a scalable registration and crowd management system for millions of users.",
		"Built Node.js + Redis + MySQL architecture to handle high concurrency during peak traffic.",
		"Ensured high reliability and data consistency under extreme load conditions.",
	  ],
	},
  ];

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>

				{/* Work Experience */}
				<div className="space-y-8 mb-16">
					{experiences.map((exp, i) => (
						<div
							key={i}
							className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-xl text-gray-900 dark:text-white">{exp.role}</h3>
								<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
							</div>
							<ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
								{exp.details.map((detail, index) => (
									<li key={index} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
										<span className="text-base">{detail}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Key Achievements */}
				<h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
					Key Achievements
				</h3>
				<div className="space-y-8">
					{achievements.map((achievement, i) => (
						<div
							key={i}
							className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
						>
							<h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
								{achievement.title}
							</h4>
							<ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
								{achievement.details.map((detail, index) => (
									<li key={index} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
										<span className="text-base">{detail}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
