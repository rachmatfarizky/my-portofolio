'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, CheckCircle, Linkedin, Github, Twitter } from 'lucide-react';

const skills = [
  "Web Development",
  "IoT Programming",
  "Project Management",
  "Linux & Networking",
  "UI/UX Design",
  "Teamwork"
];

const projects = [
	{
		imgSrc: "https://placehold.co/600x400/312E81/FFFFFF?text=RoomView",
		title: "RoomView – IoT Developer",
		description: "Aplikasi monitoring suhu & kelembaban server berbasis IoT (ESP32, DHT11) dan dashboard web.",
		tags: ["IoT", "ESP32", "Tailwind.js"],
		link: "#",
	},
	{
		imgSrc: "https://placehold.co/600x400/4338CA/FFFFFF?text=Mini+PLTS",
		title: "Mini PLTS – IoT Programmer",
		description: "Monitoring lingkungan (ESP32, ESP8266) terintegrasi smartphone & Voice Assistant.",
		tags: ["IoT", "ESP32", "Smart Home"],
		link: "#",
	},
	{
		imgSrc: "https://placehold.co/600x400/5B21B6/FFFFFF?text=Portofolio",
		title: "Website Portofolio",
		description: "Website portofolio interaktif dengan Next.js & Tailwind CSS.",
		tags: ["Next.js", "Tailwind", "UI/UX"],
		link: "#",
	},
];

// TypeScript type untuk ProjectCard props
type ProjectCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

// Komponen ProjectCard dengan typing dan perbaikan event handler gambar
function ProjectCard({ imgSrc, title, description, tags, link }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img
        src={imgError ? 'https://placehold.co/600x400/E2E8F0/312E81?text=Image+Error' : imgSrc}
        alt={`Gambar Proyek ${title}`}
        className="w-full h-56 object-cover"
        onError={() => setImgError(true)}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
        <a href={link} className="font-semibold text-indigo-600 hover:text-indigo-800 group-hover:underline">Lihat Detail &rarr;</a>
      </div>
    </div>
  );
}

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleNavClick = (e: MouseEvent) => {
			const target = e.target as HTMLAnchorElement;
			if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
				const el = document.querySelector(target.hash);
				if (el) {
					e.preventDefault();
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					setIsMenuOpen(false);
				}
			}
		};
		const nav = document.getElementById('main-nav');
		nav?.addEventListener('click', handleNavClick);
		return () => nav?.removeEventListener('click', handleNavClick);
	}, []);

	return (
		<>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
				body { font-family: 'Inter', sans-serif; }
				html { scroll-behavior: smooth; }
			`}</style>
			<div className="bg-gray-50 dark:bg-zinc-950 text-gray-800 dark:text-gray-100">
				{/* Header / Navigasi */}
				<header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
					<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
						<a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">Portofolio.</a>
						<div className="hidden md:flex space-x-8 items-center">
							<a href="#tentang" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600 transition duration-300">Tentang Saya</a>
							<a href="#proyek" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600 transition duration-300">Proyek</a>
							<a href="#kontak" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600 transition duration-300">Kontak</a>
							<a href="#kontak" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm">Hubungi Saya</a>
						</div>
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50" title="Buka menu navigasi">
							{isMenuOpen ? <X /> : <Menu />}
						</button>
					</nav>
					{/* Menu Mobile */}
					<div className={`absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-md md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
						<div className="flex flex-col items-center px-6 pb-4">
							<a href="#tentang" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-gray-600 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-100 rounded-md">Tentang Saya</a>
							<a href="#proyek" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-gray-600 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-100 rounded-md">Proyek</a>
							<a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-gray-600 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-100 rounded-md">Kontak</a>
							<a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block mt-2 w-full bg-indigo-600 text-white text-center px-4 py-3 rounded-lg hover:bg-indigo-700">Hubungi Saya</a>
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="container mx-auto px-6 py-12 md:py-20">
					{/* Hero Section */}
					<section className="flex flex-col-reverse md:flex-row items-center text-center md:text-left min-h-[70vh]">
						<div className="md:w-1/2 mb-10 md:mb-0">
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">Hai, Saya Rachmat Farizky</h1>
							<p className="text-lg text-indigo-600 font-semibold mb-6">Internet Engineering Undergraduate</p>
							<p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 mb-8">Saya bersemangat dalam pengembangan aplikasi web, IoT, dan solusi digital inovatif. Selamat datang di portofolio saya.</p>
							<div className="flex justify-center md:justify-start space-x-4">
								<a href="#proyek" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">Lihat Proyek Saya</a>
								<a href="/cv.pdf" download className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 border border-gray-300">Unduh CV</a>
							</div>
						</div>
						<div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
							<div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 bg-gray-900 flex items-center justify-center">
								<Image
									src="/profile.jpg"
									alt="Foto profil"
									width={320}
									height={320}
									className="object-cover object-center w-full h-full aspect-square"
									priority
								/>
							</div>
						</div>
					</section>

					{/* Tentang Saya Section */}
					<section id="tentang" className="py-20 md:py-32">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Tentang Saya</h2>
							<p className="text-gray-500 dark:text-gray-300 mt-2">Perjalanan dan keahlian saya.</p>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-12">
							<div className="md:w-1/3">
								<Image
									src="https://placehold.co/600x400/E2E8F0/4F46E5?text=Gambar+Kerja"
									alt="Gambar tentang saya"
									width={600}
									height={400}
									className="rounded-lg shadow-xl w-full"
								/>
							</div>
							<div className="md:w-2/3">
								<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Sedikit cerita tentang saya</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
									Halo! Saya Rachmat Farizky, mahasiswa Internet Engineering UGM. Saya berpengalaman dalam pengembangan aplikasi web, IoT, dan sistem informasi. Saya percaya pada kolaborasi dan pembelajaran berkelanjutan.
								</p>
								<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
									Di luar dunia IT, saya suka belajar hal baru, berorganisasi, dan aktif di berbagai kegiatan kampus.
								</p>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
									{skills.map((skill, index) => (
										<div key={index} className="flex items-center space-x-2"><CheckCircle className="text-indigo-500 w-5 h-5" /><span>{skill}</span></div>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* Proyek Section */}
					<section id="proyek" className="py-20 bg-gray-100 dark:bg-zinc-900 -mx-6 px-6 rounded-2xl">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Proyek Unggulan</h2>
							<p className="text-gray-500 dark:text-gray-300 mt-2">Beberapa pekerjaan yang saya banggakan.</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</div>
					</section>

					{/* Kontak Section */}
					<section id="kontak" className="py-20 md:py-32">
						<div className="text-center max-w-2xl mx-auto">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mari Terhubung</h2>
							<p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya.</p>
							<a href="mailto:rachmatfarizky@mail.ugm.ac.id" className="inline-block bg-indigo-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">Kirim Email</a>
							<div className="flex justify-center space-x-6 mt-10">
								<a href="https://linkedin.com/in/rachmatfarizky" className="text-gray-500 hover:text-indigo-600" target="_blank" rel="noopener" title="LinkedIn"><Linkedin className="w-7 h-7" /></a>
								<a href="#" className="text-gray-500 hover:text-indigo-600" title="GitHub"><Github className="w-7 h-7" /></a>
								<a href="#" className="text-gray-500 hover:text-indigo-600" title="Twitter"><Twitter className="w-7 h-7" /></a>
							</div>
						</div>
					</section>
				</main>

				{/* Footer */}
				<footer className="bg-gray-800 text-white">
					<div className="container mx-auto px-6 py-8 text-center">
						<p>
							&copy; {new Date().getFullYear()} Rachmat Farizky. Dibuat dengan  
							dan semangat.
						</p>
					</div>
				</footer>
			</div>
		</>
	);
}
