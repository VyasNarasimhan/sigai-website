import logo from '../assets/SIGAI_logo_only.png';

function Home() {
	return (
		<div class="container">
			<nav class="bg-gray-200 border-gray-200">
				<div class="flex flex-wrap justify-between items-center p-4 mx-2">
					<a href="#" class="flex items-center">
						<img src={logo} class="h-8 mr-3" alt="SIGAI Logo" />
						<span class="self-center text-2xl font-semibold whitespace-nowrap">SIGAI</span>
					</a>
					<div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <a href="#upcomingEvents" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Upcoming Events</a>
                            </li>
                            <li>
                                <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
                            </li>
                            <li>
                                <span class="block py-2 pl-3 pr-4 text-gray-500 rounded md:border-0 md:p-0">Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
			</nav>
            <div class="mx-24">
				<div class="row text-center my-3">
					<p class="text-3xl font-bold mb-2">Welcome to <span class="text-blue-700">SIGAI@ACM</span>.</p>
					<p class="text-lg font-light mb-2"><b>S</b>pecial <b>I</b>nterest <b>G</b>roup for <b>A</b>rtificial <b>I</b>ntelligence, UVA chapter</p>
				</div>
                <hr></hr>
                <div class="row my-3" id="upcomingEvents">
                    <p class="text-xl font-bold mb-2 text-center">Upcoming Events</p>
                    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Interest Meeting</h5>
                    <p class="mb-1 font-normal text-gray-700">Learn more about SIGAI and what opportunities you'll have.</p>
                    <p class="font-normal text-gray-700">When: <b>October 4, 2023, 7:00 PM</b></p>
                    <p class="font-normal text-gray-700">Where: <b>Rice Hall 340</b></p>
                    </div>
                </div>
                <hr></hr>
                <div class="row my-3" id="about">
                    <p class="text-xl font-bold mb-2 text-center">About</p>
                    <p class="text-md mb-1 font-normal text-gray-700"><b>Our Goal: </b>Become the all-in-one, comprehensive AI club at UVA.</p>
                    <p class="text-md mb-1 font-normal text-gray-700"><b>Our Mission for our Members: </b>Enhance AI accessibility and engagement for <span class="italic">all</span> students through academic and expeiential opportunities</p>
                    <ul class="ml-2 space-y-1 text-gray-700 list-disc list-inside mb-1">
                        <li>
                            <b>Events:</b> Hackathon, faculty networking, skill-building collaborations.
                        </li>
                        <li>
                            <b>Education:</b> Guest talks, seminars, mentoring, research paper discussions, resources, research guidance.
                        </li>
                        <li>
                            <b>Projects:</b> Project support, expos, and client-focused initiatives.
                        </li>
                    </ul>
                    <p class="text-md mb-1 font-normal text-gray-700 italic">At SIGAI, we are member-owned and member-driven. You choose your level of involvement in the endeavors which interest you.</p>
                </div>
                <hr></hr>
                <div class="row my-3">
                    <p class="text-xl font-bold mb-2 text-center">Our board</p>
                    <div class="grid xl:grid-rows-2 xl:grid-cols-3 gap-4 lg:grid-rows-3 lg:grid-cols-2 md:grid-rows-6 md:grid-cols-1">
                    <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Alex Ning</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">President</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">rnx2bc@virginia.edu</p>
                        </div>
                        <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Vainateya Rangaraju</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">Vice-President</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">prr3gw@virginia.edu</p>
                        </div>
                        <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Anirudh Venkatapuram</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">Operations Director</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">qzf7nj@virginia.edu</p>
                        </div>
                        <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Raffi Khondaker</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">Education Director</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">rhm4nj@virginia.edu</p>
                        </div>
                        <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Vyas Narasimhan</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">Projects Director</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">wvy8je@virginia.edu</p>
                        </div>
                        <div class="p-3 bg-white border border-gray-200 rounded-lg shadow0 text-center">
                            <a href="#">
                                <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-90">Gang-Mu Liu</h2>
                            </a>
                            <p class="mb-1 font-normal text-gray-700">Events Director</p>
                            <p class="mb-1 text-sm font-normal text-gray-700 italic">wsg9mf@virginia.edu</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="row my-3">
                    <p class="text-xl font-bold mb-2 text-center">Resources</p>
                    <p class="text-md mb-1 font-normal text-gray-700 text-center">Join the ACM Discord <a class="text-blue-600 hover:underline" href="https://discord.com/invite/wxWgbVs" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
			</div>
            <footer class="bg-gray-200 rounded-lg shadow m-4">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">
                Disclaimer: Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization, which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization's contracts, acts or omissions.
Copyright 2023. Association for Computing Machinery at the University of Virginia. All Rights Reserved.
                </span>
                </div>
            </footer>
		</div>
		
	);
}

export default Home;